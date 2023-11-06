/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import { auth } from "express-openid-connect";
import { AUTH0_CONFIG } from "../environments/dev.config";

export function authRoutes(app: Application) {

	app.use(auth(AUTH0_CONFIG));

	app.get("/isAuthenticated`", (req, res) => {
		res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
	});
}
