/* eslint-disable curly */
/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Request, Response, NextFunction } from "express";

import {
	getUserModel,
	createUserModel,
	editUserModel,
} from "../middleware/interfaces/user.interfaces";
import {
	editUserSchema,
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
import getCurrentTimestamp from "../services/dateFormatter";

export async function createUserIfNotExists(req: Request, res: Response, next: NextFunction) {
	try {
		const { sid, uid, profile_picture, first_name, last_name, email } = JSON.parse(req.body)
		const currentDate = getCurrentTimestamp();
		const createUserPayload: createUserModel = {
			sid: sid,
			uid: uid,
			profile_picture: profile_picture,
			first_name: first_name,
			last_name: last_name,
			nickname: first_name,
			email: email,
			past_activities: {
				[currentDate.split(" ")[0]]: 0
			},
			created_at: currentDate,
			updated_at: currentDate,
		};
		return await requestValidator(createUserPayload, userCreation, res, next).then(async () => {
			if (res.headersSent) return;
			
			const user = await userRepository.getUserByUID(createUserPayload.uid)
			if (!user) {
				try {
					const invalidMember = await validateMember(sid);
					if (invalidMember) {
						return res.status(400).send({
							message: invalidMember
						})
					} else {
						const result = await userRepository.createUser(createUserPayload);
						return res.status(201).send({
						result: result,
						message: `User ${sid} has been added successfully`
					})
					}
				} catch (error) {
					return res.status(500).send(error);
				}
			}
			return res.status(400).send({
				message: "Error — User already exists"
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
		}).catch((error) => {
			return res.status(400).send(error);
		});

	} catch (err) {
		return handleError(res, err);
	}

}

export async function editUser(req: Request, res: Response, next: NextFunction) {
	try {
		const { uid, nickname } = JSON.parse(req.body);
		const editPayload: editUserModel = {
			uid: uid,
			nickname: nickname
		}
		

		return await requestValidator(editPayload, editUserSchema, res, next).then(async () => {
			await userRepository.editUser(editPayload)
			return res.status(200).send({
				result: true,
				message: `User ${nickname} has updated their nickname successfully`
			});
		}).catch((error) => {
			return res.status(400).send(error);
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

async function validateMember(sid: string): Promise<string> {
	try {
		const membership = await userRepository.getMembershipBySID(sid);
		if (membership) {
			const result = await userRepository.getRegisteredMemberBySID(sid);
			return result ? `Error — Student ID ${sid} is already registered` : ""
		}
		return `Error — Student ID ${sid} is not GISAU's member`
	} catch (error) {
		throw new Error(`Unable to validate member: ${error}`)
	}
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(res: Response, err: any) {
	return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
