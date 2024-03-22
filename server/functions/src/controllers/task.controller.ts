/* eslint-disable curly */
/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Request, Response, NextFunction } from "express";

import {
	removeTaskModel,
	upsertTaskModel,
	getTasksModel,
} from "../middleware/interfaces/task.interfaces";
import {
	getTasksSchema,
	removeTaskSchema,
	taskUpsertionSchema,
} from "../middleware/schema/task.schema";
import { requestValidator } from "../middleware/validators/request.validator";
import getCurrentTimestamp from "../services/dateFormatter";
import { User } from "../model/user";
import { getUserByUID } from "../repository/user.repository";
import * as taskRepository from "../repository/task.repository";


export async function upsertTask(req: Request, res: Response, next: NextFunction) {
	try {
		const { uid, id, title, description, cycles, target, done, edit } = JSON.parse(req.body)
		const currentDate = getCurrentTimestamp();
		const upsertTaskPayload: upsertTaskModel = {
			uid: uid,
			id: id,
			title: title,
			description: description,
			cycles: cycles,
			target: target,
			done: done,
			edit: edit,
			updated_at: currentDate,
		};
		return await requestValidator(upsertTaskPayload, taskUpsertionSchema, res, next).then(async () => {
			if (res.headersSent) return;

			const user = await getUserByUID(upsertTaskPayload.uid) as User;
			if (user) {
				try {
					await taskRepository.upsertTask(upsertTaskPayload, user.taskCounter);
					return res.status(201).send({
						result: true,
						message: `Task ${id} has been added successfully`
					})
				} catch (error) {
					return handleError(res, error);
				}
			}
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

export async function getAllTasks(req: Request, res: Response, next: NextFunction) {
	try {
		const getTasksInput: getTasksModel = {
			uid: req.params.uid,
		};


		return await requestValidator(getTasksInput, getTasksSchema, res, next).then(async () => {
			const tasks = await taskRepository.getAllTasks(getTasksInput.uid)
			return res.json({ result: tasks });
		}).catch((error) => {
			return res.status(400).send(error);
		});

	} catch (err) {
		return handleError(res, err);
	}
}

export async function removeTask(req: Request, res: Response, next: NextFunction) {
	try {
		const removeTaskPayload: removeTaskModel = {
			uid: req.body.uid,
			id: req.body.id
		};

		return await requestValidator(removeTaskPayload, removeTaskSchema, res, next).then(async () => {

			if (res.headersSent) return;

			await taskRepository.removeTaskByID(removeTaskPayload.uid, removeTaskPayload.id).then(() => {
				return res.status(200).send({
					message: `Task ${removeTaskPayload.id} removed`,
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
