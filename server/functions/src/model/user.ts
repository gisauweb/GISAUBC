import { Task } from "./task";

export interface PastActivities {
	[key: string]: number;
}

export interface Tasks {
	[key: number]: Task
}

export interface User {
	sid: string,
	uid: string,
	email: string,
	first_name: string,
	last_name: string,
	past_activities: PastActivities,
	total_points: number,
	taskCounter: number,
	tasks: Tasks,
	created_at: string,
	updated_at: string
}