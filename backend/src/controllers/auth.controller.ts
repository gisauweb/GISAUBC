import type { Request, Response } from "express";
import * as AuthService from "../services/auth.js";
import { parseMarketingOptIn } from "../services/contacts.js";

const VALID_PAYMENT_METHODS = new Set(["cash", "interac"]);

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
	if (!email) return res.status(400).json({ error: "Email not found in token" });

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
		paymentProofUrl,
		marketingOptIn,
	} = req.body;

	const trimmedStudentId = typeof studentId === "string" ? studentId.trim() : studentId;

	if (!firstName || !lastName || !trimmedStudentId) {
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
	let resolvedPaymentStatus:
		| "unpaid"
		| "paid_card"
		| "paid_cash"
		| "paid_interac"
		| "paid_existing_member"
		| "refunded" = "unpaid";

	if (paymentMethod === "cash") {
		resolvedPaymentStatus = "unpaid"; // cash collected later by admin
	} else if (paymentMethod === "interac") {
		hasPayed = true;
		resolvedPaymentStatus = "paid_interac";
		// Reject proof URLs that don't originate from our own Supabase storage bucket
		if (paymentProofUrl) {
			// SUPABASE_URL includes /auth/v1 — extract just the base origin (https://xxx.supabase.co)
			const supabaseOrigin = new URL(process.env.SUPABASE_URL!).origin;
			const expectedPrefix = `${supabaseOrigin}/storage/v1/object/public/payment_proofs/`;
			if (!paymentProofUrl.startsWith(expectedPrefix)) {
				return res.status(400).json({ error: "Invalid proof of payment URL" });
			}
		}
	}

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
			paymentStatus: resolvedPaymentStatus,
			paymentProofUrl: paymentMethod === "interac" ? paymentProofUrl : undefined,
			totalPrice,
			merch: merchIds,
			marketingOptIn: parseMarketingOptIn(marketingOptIn),
		});

		res.json({ registered: true, profile });
	} catch (e: any) {
		if (e.message === "ALREADY_EXISTS") {
			return res.status(409).json({ error: "Already registered" });
		}
		if (e?.code === "23505") {
			return res.status(409).json({ error: "Student ID or Email already in use" });
		}
		console.error("Registration Error:", e);
		return res.status(500).json({ error: "Server error" });
	}
}
