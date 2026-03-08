import express from "express";
import * as RegistrationController from "../controllers/registration.controller.js";
import { requireAdmin, requireAuth } from "../middleware.js";

const router = express.Router();

/**
 * GET /registrations/me
 * Get the authenticated user's event registrations.
 */
router.get("/me", requireAuth, RegistrationController.getMyRegistrations);

/**
 * GET /registrations/:eventId
 * Get all registrations for an event. Admin only.
 */
router.get("/:eventId", requireAuth, requireAdmin, RegistrationController.getEventRegistrations);

/**
 * POST /registrations
 * Register the authenticated user for an event.
 * Body: { eventId: number, paymentIntentId?: string }
 */
router.post("/", requireAuth, RegistrationController.registerForEvent);

/**
 * DELETE /registrations/:eventId
 * Cancel the authenticated user's registration for an event.
 */
router.delete("/:eventId", requireAuth, RegistrationController.cancelRegistration);

export default router;
