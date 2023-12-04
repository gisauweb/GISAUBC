/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import {
	createUserIfNotExists,
	getAllUsers,
	getUser,
	removeUser,
} from "../controllers/user.controller";

import { requiresAuth } from "express-openid-connect";


export function userRoutes(app: Application) {
	/**
	* Create user
	**/
	app.post("/users/create", requiresAuth(), createUserIfNotExists);

	/**
	* Get all users
	**/
	app.get("/users", requiresAuth(), getAllUsers);

	/**
	* GET user with :sid
	**/
	app.get("/users/user/:sid", requiresAuth(), getUser);

	/**
	* Delete user with :sid
	**/
	app.delete("/users/remove/:id", requiresAuth(), removeUser);

}
