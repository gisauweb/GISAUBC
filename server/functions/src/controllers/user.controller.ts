/* eslint-disable curly */
/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";

import * as GLOBAL_VARIABLES from "../environments/global_variables.config";
import * as VALIDATION_INTERCEPTOR from "../middleware/validators/ingress.validators";

import {
	getUserModel,
	getUsersModel,
	mapUser,
	updateUserPhoneModel,
	createUserModel,
} from "../middleware/interfaces/user.interfaces";
import {
	getUserSchema,
	getUsersSchema,
	updateUserPhoneSchema,
	userCreation,
} from "../middleware/schema/user.schema";
import { requestValidator } from "../middleware/validators/request.validator";
import {
	userAuthRoleModel,
	userAuthUserModel,
} from "../middleware/interfaces/auth.interface";
import {
	userAuthRoleSchema,
	userAuthUserSchema,
} from "../middleware/schema/auth.schema";
import * as userRepository from "../repository/user.repository";

export async function createUserIfNotExists(req: Request, res: Response, next: NextFunction) {
	try {
		const createUserPayload: createUserModel = {
			sid: req.body.sid,
			email: req.body.email,
			email_verified: req.body.email_verified,
			nickname: req.body.nickname,
			picture: req.body.picture,
			created_at: Date.now().toString(),
			updated_at: req.body.updated_at,
		};
		return await requestValidator(createUserPayload, userCreation, res, next).then(async () => {
			if (res.headersSent) return;

			const user = await userRepository.getUserBySID(createUserPayload.sid)
			if (!user) {
				try {
					await userRepository.createUser(createUserPayload);
					return res.status(201).send({
						message: req.body.sid + "has been added successfully"
					})
				} catch (error) {
					return res.status(500).send(error);
				}
			}
			return res.status(400).send({
				message: "User already exists!"
			})
		}).catch((error) => {
			return res.status(400).send(error);
		});

	} catch (err) {
		return handleError(res, err);
	}

}

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {

	try {

		// const usersDataDocumentArray: unknown[] = [];

		const getUsersParams: getUsersModel = {
			startNumber: Number(req.query.startNumber),
			pageSize: Number(req.query.pageSize),
		};

		return await requestValidator(getUsersParams, getUsersSchema, res, next).then(async () => {

			if (res.headersSent) return;

			// const users = userRepository.getAllUsers();
		});

	} catch (err) {
		return handleError(res, err);
	}

}

export async function getUser(req: Request, res: Response, next: NextFunction) {
	try {
		const getUserInput: getUserModel = {
			sid: req.params.sid,
		};
		

		return await requestValidator(getUserInput, getUserSchema, res, next).then(async () => {
			const result = await userRepository.getUserBySID(getUserInput.sid)
			res.json({ "result": result });
		});

	} catch (err) {
		handleError(res, err);
	}

}

export async function updateUserPhoneNumber(req: Request, res: Response, next: NextFunction) {

	try {

		const getUserInput: updateUserPhoneModel = {
			id: req.params.id,
			phone: req.body.phone,
		};

		return await requestValidator(getUserInput, updateUserPhoneSchema, res, next).then(async () => {

			if (res.headersSent) return;

			if (!VALIDATION_INTERCEPTOR.newPhoneReg.test(getUserInput.phone)) return res.status(400).send({
				message: "invalid phone",
			});

			return await GLOBAL_VARIABLES.setMana.collection("users").where("ID", "==", getUserInput.id).limit(1).get().then(async (queryUserSnapshot) => {

				if (queryUserSnapshot.empty) return res.status(404).send({
					message: "no user found for id provided",
				});

				const userDocID = queryUserSnapshot.docs[0].id;

				return await admin.auth().updateUser(getUserInput.id, {
					phoneNumber: getUserInput.phone,
				}).then(async (userRecord) => {

					await GLOBAL_VARIABLES.setMana.collection("users").doc(userDocID).update({
						phone: getUserInput.phone,
					}).then(() => {

						return res.status(200).send({
							message: "user phone number updated successfully",
							user_data: userRecord,
						});

					}).catch((error) => {
						return res.status(400).send(error);
					});

				}).catch((error) => {
					return res.status(400).send(error);
				});


			}).catch((error) => {
				return res.status(400).send(error);
			});

		});

	} catch (err) {
		return handleError(res, err);
	}

}

export async function patchUserRole(req: Request, res: Response, next: NextFunction) {

	try {

		const patchUserPasswordPayload: userAuthRoleModel = {
			id: req.params.id,
			role: req.body.role,
		};

		return await requestValidator(patchUserPasswordPayload, userAuthRoleSchema, res, next).then(async () => {

			if (res.headersSent) return;

			await admin.auth().setCustomUserClaims(patchUserPasswordPayload.id, {
				role: patchUserPasswordPayload.role,
			}).then(async () => {

				await admin.auth().getUser(patchUserPasswordPayload.id).then((userRecord) => {

					return res.status(200).send({
						message: "update successful",
						user: mapUser(userRecord),
					});

				});

			}).catch((error) => {
				return res.status(400).send({
					message: error,
				});
			});

		});

	} catch (err) {
		return handleError(res, err);
	}

}

export async function removeUser(req: Request, res: Response, next: NextFunction) {

	try {

		const removeUserPayload: userAuthUserModel = {
			id: req.params.id,
		};

		return await requestValidator(removeUserPayload, userAuthUserSchema, res, next).then(async () => {

			if (res.headersSent) return;

			await admin.auth().deleteUser(removeUserPayload.id).then(() => {

				return res.status(200).send({
					message: `user with ID: ${removeUserPayload.id} removed`,
				});

			}).catch((error) => {
				return res.status(400).send({
					message: error,
				});
			});

		});

	} catch (err) {
		return handleError(res, err);
	}

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(res: Response, err: any) {
	return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
