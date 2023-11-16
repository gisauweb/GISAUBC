import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

import { getFirestore } from "firebase-admin/firestore";
import express = require("express");
import { RequestHandler } from "express";
import { AUTH0_CONFIG, FB_SERVICE_ACCOUNT } from "./environments/dev.config";

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

admin.initializeApp({
	credential: admin.credential.cert(ServiceAccountPARAMS),
	databaseURL: "https://gisaubc-dev.firebaseio.com",
	storageBucket: "gisaubc-dev.appspot.com",
});


import { authRoutes } from "./routes/auth.routes";
import { userRoutes } from "./routes/user.routes";
import { auth } from "express-openid-connect";

const app = express();
export const db = getFirestore();

app.use(express.json() as RequestHandler);
app.use(express.urlencoded({
	extended: true,
}) as RequestHandler);
app.use(cors({ origin: true }));

app.use(auth(AUTH0_CONFIG));
userRoutes(app);
authRoutes(app);

const runtimeOpts = {
	timeoutSeconds: 180,
};

export const api = functions.runWith(runtimeOpts).https.onRequest(app);
