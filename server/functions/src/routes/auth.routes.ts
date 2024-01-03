import { Application } from "express";

export function authRoutes(app: Application) {

	app.get("/", (req, res) => {
		res.send({
			messages: "Hello"
		});
	});
}

