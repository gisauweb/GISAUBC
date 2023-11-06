/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as dotenv from "dotenv";

dotenv.config();

export const API_KEY_VALUE = process.env.API_KEY_VALUE!;
export const API_BASE_URL = process.env.API_BASE_URL!;
export const IDENTITY_TOOLKIT_BASE_URL = process.env.IDENTITY_TOOLKIT_BASE_URL!;
export const IDENTITY_TOOLKIT_KEYHOLDER = process.env.IDENTITY_TOOLKIT_KEYHOLDER!;
export const SECURE_API_BASE_URL = process.env.SECURE_API_BASE_URL!;
export const SECURE_API_KEYHOLDER = process.env.SECURE_API_KEYHOLDER!;
export const CUSTOM_TOKEN_KEYHOLDER = process.env.CUSTOM_TOKEN_KEYHOLDER!;
export const RESET_API_KEYHOLDER = process.env.RESET_API_KEYHOLDER!;
export const SALT = process.env.SALT!;

export const MAILING_AUTH_USER = process.env.MAILING_AUTH_USER!;
export const MAILING_AUTH_PASS = process.env.MAILING_AUTH_PASS!;
export const MAILING_HOST = process.env.MAILING_HOST!;
export const MAILING_PORT = Number(process.env.MAILING_PORT!);
export const PHONE_AUTH_BASE_URL = process.env.PHONE_AUTH_BASE_URL!;

export const AUTH0_CONFIG = {
	authRequired: false,
	auth0Logout: true,
	secret: process.env.AUTH0_SECRET,
	baseURL: "http://localhost:3000",
	clientID: process.env.AUTH0_CLIENTID,
	issuerBaseURL: process.env.AUTH0_BASEURL
};

export const FIREBASE_SERVICE_ACCOUNT = {
	"type": "service_account",
	"project_id": "gisaubc-dev",
	"private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
	"private_key": process.env.FIREBASE_PRIVATE_KEY,
	"client_email": process.env.FIREBASE_CLIENT_EMAIL,
	"client_id": process.env.FIREBASE_CLIENT_ID,
	"auth_uri": "https://accounts.google.com/o/oauth2/auth",
	"token_uri": "https://oauth2.googleapis.com/token",
	"auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	"client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-k42gp%40gisaubc-dev.iam.gserviceaccount.com",
	"universe_domain": "googleapis.com"
}