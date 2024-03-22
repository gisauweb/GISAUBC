import { Application } from "express";

export default function authRoutes(app: Application) {

	app.get("/", (req, res) => {
		res.send({
			messages: "Hello"
		});
	});
}

