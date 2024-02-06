import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as express from "express";
import * as cors from "cors";
import * as jwks from "jwks-rsa";
import * as expressJwt from "express-jwt";
import * as jwt from "jsonwebtoken";

import { getFirestore } from "firebase-admin/firestore";
// import { RequestHandler } from "express";
import { FB_SERVICE_ACCOUNT } from "./environments/dev.config";
import  authRoutes  from "./routes/auth.routes";
import  userRoutes from "./routes/user.routes";
import pointsRoutes from "./routes/points.routes";
import helmet from "helmet";

const serviceAccount = FB_SERVICE_ACCOUNT;

const ServiceAccountPARAMS = {
	type: serviceAccount.type,
	projectId: serviceAccount.project_id,
	privateKeyId: serviceAccount.private_key_id,
	privateKey: serviceAccount.private_key,
	clientEmail: serviceAccount.client_email,
	clientId: serviceAccount.client_id,
	authUri: serviceAccount.auth_uri,
	tokenUri: serviceAccount.token_uri,
	authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
	clientC509CertUrl: serviceAccount.client_x509_cert_url,
};

const LOCAL_DEV_ENV = false;

const appOrigin = LOCAL_DEV_ENV ? "http://localhost:3000" : "https://deploy-preview-185--gisaubcv3.netlify.app";

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
	credential: admin.credential.cert(ServiceAccountPARAMS),
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
app.use(helmet());
app.use(jwtCheck);

userRoutes(app);
authRoutes(app);
pointsRoutes(app);

const runtimeOpts = {
	timeoutSeconds: 180,
};

export const api = functions.runWith(runtimeOpts).https.onRequest(app);