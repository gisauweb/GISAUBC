// import * as functions from "firebase-functions/v2";
import * as cors from "cors";
import * as express from "express";
import * as expressJwt from "express-jwt";
import * as admin from "firebase-admin";
import * as jwt from "jsonwebtoken";
import * as jwks from "jwks-rsa";

import { getFirestore } from "firebase-admin/firestore";
// import { RequestHandler } from "express";
import { onRequest } from "firebase-functions/https";
import helmet from "helmet";
import authRoutes from "./routes/auth.routes";
import pointsRoutes from "./routes/points.routes";
import taskRoutes from "./routes/task.routes";
import userRoutes from "./routes/user.routes";

const LOCAL_DEV_ENV = true;

const appOrigin = LOCAL_DEV_ENV
  ? "http://localhost:5173"
  : "https://deploy-preview-185--gisaubcv3.netlify.app";

const getSecret = jwks.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: "https://dev-ltkz6dt5hkbper2c.us.auth0.com/.well-known/jwks.json",
});

const jwtCheck = expressJwt.expressjwt({
  secret: getSecret as jwt.Secret | jwks.GetVerificationKey,
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_BASE,
  algorithms: ["RS256"],
});

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://gisaubc-dev.firebaseio.com",
  storageBucket: "gisaubc-dev.appspot.com",
});

const app = express();
export const db = getFirestore();

// app.use(express.json() as RequestHandler);
// app.use(express.urlencoded({
// 	extended: true,
// }) as RequestHandler);
app.use(cors({ origin: appOrigin }));
app.options("*", cors({ origin: appOrigin })); // Preflight CORS support

app.use(helmet());
app.use(jwtCheck);

userRoutes(app);
authRoutes(app);
pointsRoutes(app);
taskRoutes(app);

exports.api = onRequest({ timeoutSeconds: 180 }, app);
