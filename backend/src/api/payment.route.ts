import express from "express";
import * as PaymentController from "../controllers/payment.controller.js";
import { requireAuth } from "../middleware.js";

const router = express.Router();

/**
 * POST /payment/webhook
 * Stripe webhook — must receive the raw body, NOT JSON-parsed.
 * express.raw() is applied here at the route level but the global express.json()
 * in app.ts must be skipped for this path (handled via the route ordering in app.ts).
 */
router.post("/webhook", express.raw({ type: "application/json" }), PaymentController.handleWebhook);

/**
 * POST /payment/event-intent
 * Creates a Stripe PaymentIntent for an event, priced by membership status. Requires auth.
 */
router.post("/event-intent", requireAuth, PaymentController.createEventIntent);

/**
 * POST /payment/create-intent
 * Creates a Stripe PaymentIntent. Requires auth.
 */
router.post("/create-intent", requireAuth, PaymentController.createIntent);

export default router;
