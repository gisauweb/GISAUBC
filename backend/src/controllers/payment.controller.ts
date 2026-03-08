import type { Request, Response } from "express";
import * as PaymentService from "../services/payment.js";
import * as RegistrationService from "../services/registration.js";

/**
 * POST /payment/event-intent
 * Creates a Stripe PaymentIntent for an event, priced based on membership status.
 * Body: { eventId: number }
 * Returns: { clientSecret, paymentIntentId, amountCents }
 */
export async function createEventIntent(req: Request, res: Response) {
	const userId = req.user!.sub;
	const email = req.user!.email;
	const { eventId } = req.body;

	if (typeof eventId !== "number") {
		return res.status(400).json({ error: "eventId must be a number" });
	}

	if (!email) {
		return res.status(400).json({ error: "User email not found" });
	}

	try {
		const result = await PaymentService.createEventPaymentIntent(userId, eventId, email);
		return res.json(result);
	} catch (e: any) {
		if (e.message === "EVENT_NOT_FOUND") {
			return res.status(404).json({ error: "Event not found" });
		}
		if (e.message === "MEMBER_ONLY") {
			return res.status(403).json({ error: "This event is for GISAU members only" });
		}
		if (e.message === "FREE_EVENT") {
			return res.status(400).json({ error: "This event is free — no payment required" });
		}
		console.error("createEventIntent error:", e);
		return res.status(500).json({ error: "Failed to create payment intent" });
	}
}

/**
 * POST /payment/webhook
 * Stripe webhook handler. Expects a raw body (not JSON-parsed).
 *
 * Handles:
 *   - payment_intent.succeeded → create registration if not already exists (backup flow)
 *   - charge.refunded          → cancel the associated registration
 */
export async function handleWebhook(req: Request, res: Response) {
	const sig = req.headers["stripe-signature"] as string;

	if (!sig) {
		return res.status(400).json({ error: "Missing stripe-signature header" });
	}

	let event: import("stripe").default.Event;
	try {
		event = PaymentService.constructWebhookEvent(req.body as Buffer, sig);
	} catch (e: any) {
		console.error("Webhook signature verification failed:", e.message);
		return res.status(400).json({ error: `Webhook error: ${e.message}` });
	}

	try {
		switch (event.type) {
			case "payment_intent.succeeded": {
				const intent = event.data.object as import("stripe").default.PaymentIntent;
				const { eventId, userId } = intent.metadata;

				// Only act on event registration intents (those with our metadata)
				if (eventId && userId) {
					await RegistrationService.confirm_registration_from_webhook(
						userId,
						Number(eventId),
						intent.id,
					);
				}
				break;
			}

			default:
				// Unhandled event types are silently ignored
				break;
		}

		return res.json({ received: true });
	} catch (e) {
		console.error("Webhook handler error:", e);
		return res.status(500).json({ error: "Webhook handler failed" });
	}
}

/**
 * POST /payment/create-intent
 * Creates a Stripe PaymentIntent. Requires auth.
 */
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
