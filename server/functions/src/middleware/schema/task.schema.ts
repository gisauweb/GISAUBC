import { Schema } from "../validators/ingress.validators";

export const taskUpsertionSchema: Schema = {
	fields: {
		uid: "string",
		id: "number",
		title: "string",
		description: "string",
		cycles: "number",
		target: "number",
		done: "boolean",
		updated_at: "string"
	},
	required: [
		"uid",
		"id",
		"title",
		"description",
		"cycles",
		"target",
		"done",
		"updated_at"
	],
};

export const getTasksSchema: Schema = {
	fields: {
		uid: "string",
	},
	required: [
		"uid",
	],
};

export const removeTaskSchema: Schema = {
	fields: {
		uid: "string",
		id: "number",
	},
	required: [
		"uid",
		"id",
	],
};
