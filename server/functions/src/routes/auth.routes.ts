/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import { requiresAuth } from "express-openid-connect";
import guard = require("express-jwt-permissions");
import axios from "axios";

const checkPermissions = guard({
	permissionsProperty: "permissions",
});

const challengesAPIEndpoint = "http://127.0.0.1:5001/gisaubc-dev/us-central1/api/auth/challenges"

export function authRoutes(app: Application) {

	app.get("/", (req, res) => {
		res.send("Hello");
	});

	app.get("/auth/challenges", checkPermissions.check("read:challenges"), function (req, res) {
		res.json({
			challenge1: "This is the first challenge",
			challenge2: "This is the second challenge",
		});
	});

	app.get("/challenges", async function (req: any, res: any) {
		try {
			const { access_token } = req.params.code;
			const response = await axios({
				method: "get", 
				url: challengesAPIEndpoint,
				headers: { Authorization: `Bearer ${access_token}` }
			});
			res.json(response.data);
		} catch (error: any) {
			console.log(error);
			if (error.response.status === 401) {
				res.status(401).json("Unauthorized to access data");
			} else if (error.response.status === 403) {
				res.status(403).json("Permission denied");
			} else {
				res.status(500).json("Whoops, something went wrong");
			}
		}
	});

	app.get("/profile", requiresAuth(), (req, res) => {
		res.send(JSON.stringify(req.oidc.user));
	});
}

