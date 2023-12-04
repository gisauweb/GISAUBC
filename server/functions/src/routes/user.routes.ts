/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import {
	createUserIfNotExists,
	getAllUsers,
	getUser,
	updateUserPhoneNumber,
	patchUserRole,
	removeUser,
} from "../controllers/user.controller";

import { isAuthorized } from "../services/authorized";
import { requiresAuth } from "express-openid-connect";


export function userRoutes(app: Application) {
	/**
	* Create user
	**/
	app.post("/users/create", requiresAuth(), createUserIfNotExists);

	/**
	* Get all users
	**/
	app.get("/users/getAll", requiresAuth(), getAllUsers);

	/**
	* GET user :id user
	**/
	app.get("/users/user/:sid", requiresAuth(), getUser);

	/**
	* Update user phone number :id user
	**/
	app.patch("/users/updatePhoneNumber/:id", [
		requiresAuth,
		isAuthorized({ hasRole: ["admin", "user", "manager"], allowSameUser: true }),
		updateUserPhoneNumber,
	]);

	/**
	* Patch user role :user id
	**/
	app.patch("/users/updateRole/:id", [
		requiresAuth,
		isAuthorized({ hasRole: ["admin", "manager"] }),
		patchUserRole,
	]);

	/**
	* Delete user :user id
	**/
	app.delete("/users/remove/:id", [
		requiresAuth,
		isAuthorized({ hasRole: ["admin", "manager"] }),
		removeUser,
	]);

}
