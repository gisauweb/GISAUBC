import type { Request, Response } from "express";
import * as AuthService from "../services/auth.js";
import * as PaymentService from "../services/payment.js";

const VALID_PAYMENT_METHODS = new Set(["card", "cash", "payed"]);

export async function me(req: Request, res: Response) {
	const userId = req.user!.sub;
	const profile = await AuthService.get_profile(userId);

	res.json({
		userId,
		registered: !!profile,
		profile,
	});
}

export function googleAuth(req: Request, res: Response) {
	const redirectTo = `${process.env.CLIENT_ORIGIN}/app`;
	const url =
		`${process.env.SUPABASE_URL}/authorize` +
		`?provider=google` +
		`&redirect_to=${encodeURIComponent(redirectTo)}`;

	res.redirect(url);
}

export function callback(req: Request, res: Response) {
	const code = req.query.code as string | undefined;
	if (!code) return res.status(400).send("Missing code");

	res.redirect(`${process.env.CLIENT_ORIGIN}/app?code=${encodeURIComponent(code)}`);
}

export async function register(req: Request, res: Response) {
	const userId = req.user!.sub;
	// Use email from the verified JWT, not from the request body.
	const email = req.user!.email;

	const {
		firstName,
		lastName,
		studentId,
		faculty,
		membershipType,
		yearOfStudy,
		recommendation,
		paymentMethod,
		merch,
		paymentIntentId,
	} = req.body;

	const trimmedStudentId = typeof studentId === "string" ? studentId.trim() : studentId;

	if (!firstName || !lastName || !trimmedStudentId || !email) {
		return res.status(400).json({ error: "Missing required fields" });
	}

	if (!VALID_PAYMENT_METHODS.has(paymentMethod)) {
		return res.status(400).json({ error: "Invalid payment method" });
	}

	// DB enum only supports 'full' | 'half'; map sem1/sem2 → 'half'
	const dbMembershipType: "full" | "half" = membershipType === "full" ? "full" : "half";
	const merchIds: string[] = Array.isArray(merch) ? merch.filter((id: string) => id !== "") : [];

	// Calculate the authoritative total server-side.
	const expectedAmountCents = await AuthService.calculateExpectedTotal(membershipType, merchIds);
	const totalPrice = String(expectedAmountCents / 100);

	let hasPayed = false;

	if (paymentMethod === "card") {
		if (!paymentIntentId) {
			return res.status(402).json({ error: "Payment required" });
		}
		// Verify the intent succeeded AND the amount matches what we expect.
		const verified = await PaymentService.verifyPayment(paymentIntentId, expectedAmountCents);
		if (!verified) {
			return res.status(402).json({ error: "Payment not completed or amount mismatch" });
		}
		hasPayed = true;
	} else if (paymentMethod === "payed") {
		hasPayed = true;
	}
	// cash: hasPayed stays false

	try {
		const profile = await AuthService.register_user({
			userId,
			firstName,
			lastName,
			studentId: trimmedStudentId,
			email,
			faculty,
			membershipType: dbMembershipType,
			yearOfStudy,
			recommendation,
			paymentMethod,
			hasPayed,
			totalPrice,
			merch: merchIds,
		});

		res.json({ registered: true, profile });
	} catch (e: any) {
		if (e.message === "ALREADY_EXISTS") {
			return res.status(409).json({ error: "Already registered" });
		}
		if (e.message === "NOT_EXISTING_MEMBER") {
			return res.status(403).json({ error: "Student ID not found in existing members list" });
		}
		if (e.message === "MUST_USE_PAYED") {
			return res.status(403).json({ error: "Your student ID is registered as an existing member. Please select \"I am a member\" as your payment method." });
		}
		if (e?.code === "23505") {
			return res.status(409).json({ error: "Student ID or Email already in use" });
		}
		console.error("Registration Error:", e);
		return res.status(500).json({ error: "Server error" });
	}
}
