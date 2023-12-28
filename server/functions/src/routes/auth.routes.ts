/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import { requiresAuth } from "express-openid-connect";
import guard = require("express-jwt-permissions");

const checkPermissions = guard({
	permissionsProperty: "permissions",
});


export function authRoutes(app: Application) {

	app.get("/", (req, res) => {
		res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
	});

	app.get("/challenges", checkPermissions.check("read:challenges"), function (req, res) {
		res.json({
			challenge1: "This is the first challenge",
			challenge2: "This is the second challenge",
		});
	});

	app.get("/profile", requiresAuth(), (req, res) => {
		res.send(JSON.stringify(req.oidc.user));
	});
}
