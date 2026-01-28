import type { SupabaseJwt } from "../auth/types";

declare global {
  namespace Express {
    interface Request {
      user?: SupabaseJwt;
      accessToken?: string;
    }
  }
}

export {};
