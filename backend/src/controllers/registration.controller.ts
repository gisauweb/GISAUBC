import type { Request, Response } from "express";
import * as RegistrationService from "../services/registration.js";

/**
 * POST /api/v1/registrations
 * Register the authenticated user for an event. Free events only for now.
 * Body: { eventId: number }
 */
export async function registerForEvent(req: Request, res: Response) {
	const userId = req.user!.sub;
	const { eventId } = req.body;

	if (typeof eventId !== "number") {
		return res.status(400).json({ error: "eventId must be a number" });
	}

	try {
		// Determine the applicable price and validate access
		const { amountCents } = await RegistrationService.get_event_price_for_user(userId, eventId);

		if (amountCents > 0) {
			return res.status(400).json({ error: "Online registration for paid events isn't available yet" });
		}

		const registration = await RegistrationService.register_for_event({ userId, eventId });
		return res.status(201).json(registration);
	} catch (e: any) {
		if (e.message === "EVENT_NOT_FOUND") {
			return res.status(404).json({ error: "Event not found" });
		}
		if (e.message === "MEMBER_ONLY") {
			return res.status(403).json({ error: "This event is for GISAU members only" });
		}
		if (e.message === "ALREADY_REGISTERED") {
			return res.status(409).json({ error: "Already registered for this event" });
		}
		if (e.message === "EVENT_FULL") {
			return res.status(409).json({ error: "Event is at full capacity" });
		}
		console.error("registerForEvent error:", e);
		return res.status(500).json({ error: "Server error" });
	}
}

/**
 * DELETE /api/v1/registrations/:eventId
 * Cancel the authenticated user's registration for an event.
 */
export async function cancelRegistration(req: Request, res: Response) {
	const userId = req.user!.sub;
	const eventId = Number(req.params.eventId);

	if (Number.isNaN(eventId)) {
		return res.status(400).json({ error: "Invalid eventId" });
	}

	try {
		const registration = await RegistrationService.cancel_registration(userId, eventId);
		return res.json(registration);
	} catch (e: any) {
		if (e.message === "REGISTRATION_NOT_FOUND") {
			return res.status(404).json({ error: "No active registration found for this event" });
		}
		console.error("cancelRegistration error:", e);
		return res.status(500).json({ error: "Server error" });
	}
}

/**
 * GET /api/v1/registrations/me
 * Get all confirmed registrations for the authenticated user.
 */
export async function getMyRegistrations(req: Request, res: Response) {
	const userId = req.user!.sub;

	try {
		const registrations = await RegistrationService.get_user_registrations(userId);
		return res.json(registrations);
	} catch (e) {
		console.error("getMyRegistrations error:", e);
		return res.status(500).json({ error: "Server error" });
	}
}

/**
 * GET /api/v1/registrations/:eventId
 * Get all confirmed registrations for an event. Admin only.
 */
export async function getEventRegistrations(req: Request, res: Response) {
	const eventId = Number(req.params.eventId);

	if (Number.isNaN(eventId)) {
		return res.status(400).json({ error: "Invalid eventId" });
	}

	try {
		const registrations = await RegistrationService.get_event_registrations(eventId);
		return res.json(registrations);
	} catch (e) {
		console.error("getEventRegistrations error:", e);
		return res.status(500).json({ error: "Server error" });
	}
}
