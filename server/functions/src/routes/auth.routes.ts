/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import { auth, requiresAuth } from "express-openid-connect";
import { AUTH0_CONFIG } from "../environments/dev.config";


export function authRoutes(app: Application) {

	app.use(auth(AUTH0_CONFIG));

	app.get("/", (req, res) => {
		res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
	});

	app.get("/profile", requiresAuth(), (req, res) => {
		res.send(JSON.stringify(req.oidc.user));
	});
}
