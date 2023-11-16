/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import { requiresAuth } from "express-openid-connect";

export function authRoutes(app: Application) {

	app.get("/", (req, res) => {
		res.send(req.oidc.isAuthenticated() ? "Logged in " : "Logged out");
	});

	app.get("/profile", requiresAuth(), (req, res) => {
		res.send(JSON.stringify(req.oidc.user));
	});

	// app.get("/validate", [
	// 	requiresAuth,
	// 	isAuthorized({ hasRole: ["admin", "manager"] }),
	// 	validateUser,
	// ]);
}
