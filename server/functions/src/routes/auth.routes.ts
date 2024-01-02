import { Application } from "express";

export function authRoutes(app: Application) {

	app.get("/", (req, res) => {
		res.send({
			messages: "Hello"
		});
	});

	app.get("/auth/challenges", function (req, res) {
		res.json({
			challenge1: "This is the first challenge",
			challenge2: "This is the second challenge",
		});
	});
}

