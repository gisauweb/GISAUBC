/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

export interface upsertTaskModel {
	uid: string,
	id: number,
	title: string,
	description: string,
	cycles: number,
	target: number,
	done: boolean,
	updated_at: string
}

export interface getTasksModel {
    uid: string
}

export interface removeTaskModel {
    uid: string,
    id: number
}