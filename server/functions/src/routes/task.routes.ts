/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import * as taskController from "../controllers/task.controller";


export default function taskRoutes(app: Application) {
	/**
	* Create or edit task
	**/
	app.post("/tasks/upsert", taskController.upsertTask);

	/**
	* Get all tasks
	**/
	app.get("/tasks/:uid", taskController.getAllTasks);

	/**
	* Delete task
	**/
	app.delete("/tasks/remove", taskController.removeTask);

}
