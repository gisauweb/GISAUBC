import type { NextFunction, Request, Response } from "express";
import { createRemoteJWKSet, jwtVerify } from "jose";
import type { SupabaseJwt } from "./auth/types.js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const JWKS_URL = new URL(`${SUPABASE_URL}/.well-known/jwks.json`);
const JWKS = createRemoteJWKSet(JWKS_URL);

export const requireAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.sendStatus(401);

  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: SUPABASE_URL,
      audience: "authenticated", // optional: only set if you're sure your tokens have this aud
    });

    if (!payload.sub)
      return res.status(403).json({ error: "Token missing sub" });

    req.user = payload as SupabaseJwt;
    req.accessToken = token;
    next();
  } catch (e: any) {
    return res.status(403).json({ error: "Invalid token", detail: e?.message });
  }
};
