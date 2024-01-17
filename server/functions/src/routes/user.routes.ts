/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import {
	createUserIfNotExists,
	getAllUsers,
	getUser,
	removeUser,
} from "../controllers/user.controller";



export default function userRoutes(app: Application) {
	/**
	* Create user
	**/
	app.post("/users/create", createUserIfNotExists);

	/**
	* Get all users
	**/
	app.get("/users", getAllUsers);

	/**
	* GET user with :uid
	**/
	app.get("/users/user/:uid", getUser);

	/**
	* Add new field to user with :uid
	**/
	app.patch("/users/user/:uid", getUser);

	/**
	* Delete user with :uid
	**/
	app.delete("/users/remove/:uid", removeUser);

}
