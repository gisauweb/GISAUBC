/* eslint-disable curly */
/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Request, Response, NextFunction } from "express";

import {
	addPointsModel,
} from "../middleware/interfaces/points.interfaces";
import {
	addPoints,
} from "../middleware/schema/points.schema";
import { requestValidator } from "../middleware/validators/request.validator";
import * as pointsRepository from "../repository/points.repository";
import * as userRepository from "../repository/user.repository";
import { User } from "../model/user";

export async function addPointsToUser(req: Request, res: Response, next: NextFunction) {
	try {
		const { uid, points } = JSON.parse(req.body)
		const addPointsPayload: addPointsModel = {
			uid: uid,
			points: points,
			updated_at: Date.now().toString(),
		};
		return await requestValidator(addPointsPayload, addPoints, res, next).then(async () => {
			if (res.headersSent) return;
			
			const user = await userRepository.getUserByUID(addPointsPayload.uid) as User;
			if (user) {
				try {
						await pointsRepository.addPoints(user, addPointsPayload);
						return res.status(201).send({
						result: true,
						message: `User ${uid}'s points has been updated successfully`
					})
				} catch (error) {
					return res.status(500).send(error);
				}}
			return res.status(500).send({
				message: "Error — User does not exists!"
			})
		}).catch((error) => {
			return res.status(400).send(error);
		});

	} catch (err) {
		return handleError(res, err);
	}
}

export async function getLeaderboard(req: Request, res: Response) {
	try {
		const leaderboard = pointsRepository.getLeaderboard();
		res.json({ result: leaderboard })
	} catch (error) {
		return handleError(res, error);
	}
	return;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(res: Response, err: any) {
	return res.status(500).send({ message: `${err.code} - ${err.message}` });
}
