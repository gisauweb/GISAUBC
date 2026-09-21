import cors from "cors";
import "dotenv/config";
import express, { Router } from "express";
import rateLimit from "express-rate-limit";
import auth from "./api/auth.route.js";
import * as AuthController from "./controllers/auth.controller.js";
import { requireAuth } from "./middleware.js";
import member from "./api/member.route.js";
import merch from "./api/merch.route.js";
import payment from "./api/payment.route.js";
import post from "./api/post.route.js";
import registration from "./api/registration.route.js";

const app = express();
const port = process.env.PORT || 3000;

// ── Rate limiters ────────────────────────────────────────────────────────────

// General: 120 requests per minute per IP (covers public browsing)
const generalLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 120,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

// Sensitive: 10 requests per 15 minutes per IP (registration, payment — actual writes)
const sensitiveLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many attempts, please try again later." },
});

// Auth read: 60 requests per minute per IP (GET /auth/me — just reading your own profile)
const authReadLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

app.use(generalLimiter);

app.use(
  cors({
    origin: `${process.env.CLIENT_ORIGIN}`,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you use cookies or auth
  })
);

// Exclude the Stripe webhook path from JSON parsing — it needs the raw body for signature verification
app.use((req, res, next) => {
  if (req.originalUrl === "/api/v1/payment/webhook") return next();
  express.json()(req, res, next);
});

const api = Router();
api.use("/posts", post);
// /auth/me is registered directly here — bypasses the sensitive limiter entirely
api.get("/auth/me", authReadLimiter, requireAuth, AuthController.me);
api.use("/auth", sensitiveLimiter, auth);   // register, google, callback — strict limit
api.use("/members", sensitiveLimiter, member);
api.use("/merch", merch);
api.use("/payment", sensitiveLimiter, payment);
api.use("/registrations", sensitiveLimiter, registration);

app.use("/api/v1", api);

app.get("/", (req, res) => {
  res.json({ message: "GISAU Backend API" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
