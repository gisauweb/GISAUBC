import type { Request, Response } from "express";
import * as PaymentService from "../services/payment.js";

export async function createIntent(req: Request, res: Response) {
	const { amountCents } = req.body;
	const email = req.user!.email;

	if (typeof amountCents !== "number" || amountCents <= 0) {
		return res.status(400).json({ error: "Invalid amountCents" });
	}

	if (!email) {
		return res.status(400).json({ error: "User email not found" });
	}

	try {
		const { clientSecret } = await PaymentService.createPaymentIntent(amountCents, email);
		res.json({ clientSecret });
	} catch (e) {
		console.error("Stripe error:", e);
		res.status(500).json({ error: "Failed to create payment intent" });
	}
}
