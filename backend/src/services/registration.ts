import type { InferSelectModel } from "drizzle-orm";
import { and, count, eq } from "drizzle-orm";
import db from "../db/database.js";
import { eventRegistrations, posts, profiles } from "../db/schema/index.js";

export type EventRegistration = InferSelectModel<typeof eventRegistrations>;

export type RegisterForEventInput = {
	userId: string;
	eventId: number;
	paymentIntentId?: string;
};

export type RegistrationWithEvent = EventRegistration & {
	event: Pick<
		InferSelectModel<typeof posts>,
		"id" | "title" | "date" | "location" | "coverImage" | "priceMember" | "priceRegular"
	>;
};

export type RegistrationWithMember = EventRegistration & {
	member: Pick<
		InferSelectModel<typeof profiles>,
		"id" | "firstName" | "lastName" | "email" | "studentId"
	>;
};

/**
 * Register a user for an event.
 * Checks for capacity and duplicate registrations inside a transaction.
 * Throws named errors:
 *   - "EVENT_NOT_FOUND"       — event does not exist or is not published
 *   - "ALREADY_REGISTERED"   — user already has a confirmed registration
 *   - "EVENT_FULL"           — capacity has been reached
 */
export const register_for_event = async (
	input: RegisterForEventInput,
): Promise<EventRegistration> => {
	return await db.transaction(async (tx) => {
		// Fetch the event to validate it exists and check capacity
		const [event] = await tx
			.select({ id: posts.id, capacity: posts.capacity, status: posts.status })
			.from(posts)
			.where(and(eq(posts.id, input.eventId), eq(posts.status, "published")))
			.limit(1);

		if (!event) throw new Error("EVENT_NOT_FOUND");

		// Check for duplicate confirmed registration
		const [duplicate] = await tx
			.select({ id: eventRegistrations.id })
			.from(eventRegistrations)
			.where(
				and(
					eq(eventRegistrations.eventId, input.eventId),
					eq(eventRegistrations.memberId, input.userId),
					eq(eventRegistrations.status, "confirmed"),
				),
			)
			.limit(1);

		if (duplicate) throw new Error("ALREADY_REGISTERED");

		// Enforce capacity if set
		if (event.capacity !== null) {
			const countResult = await tx
				.select({ confirmedCount: count() })
				.from(eventRegistrations)
				.where(
					and(
						eq(eventRegistrations.eventId, input.eventId),
						eq(eventRegistrations.status, "confirmed"),
					),
				);

			const confirmedCount = countResult[0]?.confirmedCount ?? 0;
			if (confirmedCount >= event.capacity) throw new Error("EVENT_FULL");
		}

		const [registration] = await tx
			.insert(eventRegistrations)
			.values({
				eventId: input.eventId,
				memberId: input.userId,
				status: "confirmed",
				paymentIntentId: input.paymentIntentId ?? null,
			})
			.returning();

		if (!registration) throw new Error("Failed to insert registration");
		return registration;
	});
};

/**
 * Cancel a user's registration for an event.
 * Throws:
 *   - "REGISTRATION_NOT_FOUND" — no confirmed registration exists for this user/event pair
 */
export const cancel_registration = async (
	userId: string,
	eventId: number,
): Promise<EventRegistration> => {
	const [updated] = await db
		.update(eventRegistrations)
		.set({ status: "cancelled" })
		.where(
			and(
				eq(eventRegistrations.memberId, userId),
				eq(eventRegistrations.eventId, eventId),
				eq(eventRegistrations.status, "confirmed"),
			),
		)
		.returning();

	if (!updated) throw new Error("REGISTRATION_NOT_FOUND");
	return updated;
};

/**
 * Get all confirmed registrations for a user, joined with event details.
 */
export const get_user_registrations = async (
	userId: string,
): Promise<RegistrationWithEvent[]> => {
	try {
		const rows = await db
			.select({
				id: eventRegistrations.id,
				eventId: eventRegistrations.eventId,
				memberId: eventRegistrations.memberId,
				status: eventRegistrations.status,
				paymentIntentId: eventRegistrations.paymentIntentId,
				createdAt: eventRegistrations.createdAt,
				event: {
					id: posts.id,
					title: posts.title,
					date: posts.date,
					location: posts.location,
					coverImage: posts.coverImage,
					priceMember: posts.priceMember,
					priceRegular: posts.priceRegular,
				},
			})
			.from(eventRegistrations)
			.innerJoin(posts, eq(eventRegistrations.eventId, posts.id))
			.where(
				and(
					eq(eventRegistrations.memberId, userId),
					eq(eventRegistrations.status, "confirmed"),
				),
			);

		return rows;
	} catch (err) {
		console.error("Error fetching user registrations:", err);
		throw err;
	}
};

/**
 * Get all confirmed registrations for an event, joined with member details.
 * Intended for admin use.
 */
export const get_event_registrations = async (
	eventId: number,
): Promise<RegistrationWithMember[]> => {
	try {
		const rows = await db
			.select({
				id: eventRegistrations.id,
				eventId: eventRegistrations.eventId,
				memberId: eventRegistrations.memberId,
				status: eventRegistrations.status,
				paymentIntentId: eventRegistrations.paymentIntentId,
				createdAt: eventRegistrations.createdAt,
				member: {
					id: profiles.id,
					firstName: profiles.firstName,
					lastName: profiles.lastName,
					email: profiles.email,
					studentId: profiles.studentId,
				},
			})
			.from(eventRegistrations)
			.innerJoin(profiles, eq(eventRegistrations.memberId, profiles.id))
			.where(
				and(
					eq(eventRegistrations.eventId, eventId),
					eq(eventRegistrations.status, "confirmed"),
				),
			);

		return rows;
	} catch (err) {
		console.error("Error fetching event registrations:", err);
		throw err;
	}
};

/**
 * Get the number of confirmed registrations for an event.
 * Useful for displaying remaining spots.
 */
export const get_registration_count = async (eventId: number): Promise<number> => {
	try {
		const countResult = await db
			.select({ confirmedCount: count() })
			.from(eventRegistrations)
			.where(
				and(
					eq(eventRegistrations.eventId, eventId),
					eq(eventRegistrations.status, "confirmed"),
				),
			);

		return countResult[0]?.confirmedCount ?? 0;
	} catch (err) {
		console.error("Error fetching registration count:", err);
		throw err;
	}
};
