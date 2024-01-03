/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import {
	createUserIfNotExists,
	getAllUsers,
	getUser,
	removeUser,
} from "../controllers/user.controller";



export function userRoutes(app: Application) {
	/**
	* Create user
	**/
	app.post("/users/create", createUserIfNotExists);

	/**
	* Get all users
	**/
	app.get("/users", getAllUsers);

	/**
	* GET user with :sid
	**/
	app.get("/users/user/:sid", getUser);

	/**
	* Delete user with :sid
	**/
	app.delete("/users/remove/:id", removeUser);

}
