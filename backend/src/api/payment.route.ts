import express from "express";
import * as PaymentController from "../controllers/payment.controller.js";
import { requireAuth } from "../middleware.js";

const router = express.Router();

/**
 * POST /payment/create-intent
 * Creates a Stripe PaymentIntent. Requires auth.
 */
router.post("/create-intent", requireAuth, PaymentController.createIntent);

export default router;
