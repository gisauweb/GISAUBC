import type { JWTPayload } from "jose";

export type SupabaseJwt = JWTPayload & {
	sub: string;
	email?: string;
};
