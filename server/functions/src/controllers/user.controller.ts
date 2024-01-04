/* eslint-disable curly */
/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Request, Response, NextFunction } from "express";

import {
	getUserModel,
	createUserModel,
} from "../middleware/interfaces/user.interfaces";
import {
	getUserSchema,
	userCreation,
} from "../middleware/schema/user.schema";
import { requestValidator } from "../middleware/validators/request.validator";
import {
	userAuthUserModel,
} from "../middleware/interfaces/auth.interface";
import {
	userAuthUserSchema,
} from "../middleware/schema/auth.schema";
import * as userRepository from "../repository/user.repository";

export async function createUserIfNotExists(req: Request, res: Response, next: NextFunction) {
	try {
		const { sid, uid, first_name, last_name, email } = JSON.parse(req.body)
		const createUserPayload: createUserModel = {
			sid: sid,
			uid: uid,
			first_name: first_name,
			last_name: last_name,
			email: email,
			created_at: Date.now().toString(),
			updated_at: Date.now().toString(),
		};
		return await requestValidator(createUserPayload, userCreation, res, next).then(async () => {
			if (res.headersSent) return;
			
			const user = await userRepository.getUserByUID(createUserPayload.sid)
			if (!user) {
				try {
					await userRepository.createUser(createUserPayload);
					return res.status(201).send({
						result: true,
						message: `User ${sid} has been added successfully`
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

export async function getAllUsers(req: Request, res: Response) {

	try {
		if (res.headersSent) return;

		const users = await userRepository.getAllUsers();
		return res.send({
			result: users
		});
	} catch (err) {
		return handleError(res, err);
	}

}

export async function getUser(req: Request, res: Response, next: NextFunction) {
	try {
		const getUserInput: getUserModel = {
			uid: req.params.uid,
		};
		

		return await requestValidator(getUserInput, getUserSchema, res, next).then(async () => {
			const user = await userRepository.getUserByUID(getUserInput.uid)
			return res.json({ result: user || false });
		});

	} catch (err) {
		return handleError(res, err);
	}

}

export async function removeUser(req: Request, res: Response, next: NextFunction) {

	try {
		const removeUserPayload: userAuthUserModel = {
			uid: req.params.uid,
		};

		return await requestValidator(removeUserPayload, userAuthUserSchema, res, next).then(async () => {

			if (res.headersSent) return;

			await userRepository.removeUser(removeUserPayload.uid).then(() => {

				return res.status(200).send({
					message: `User with ID: ${removeUserPayload.uid} removed`,
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
