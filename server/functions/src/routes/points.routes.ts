/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import { Application } from "express";
import {
	addPointsToUser,
	getLeaderboard,
} from "../controllers/points.controller";



export function userRoutes(app: Application) {
	/**
	* Add point
	**/
	app.put("/points/add", addPointsToUser);

	// /**
	// * Get points leaderboard
	// **/
	app.get("/points/leaderboard", getLeaderboard);
}
