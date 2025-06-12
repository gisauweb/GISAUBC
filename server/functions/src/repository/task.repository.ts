import { sha256 } from "js-sha256";
import { upsertTaskModel } from "../middleware/interfaces/task.interfaces";
import { User } from "../model/user";
import { db } from "./../index"
import { Task } from "../model/task";

const secretCode = process.env.HASH_SECRET_CODE;

export async function  upsertTask(taskPayload: upsertTaskModel, taskCounter: number) {
    const task: Task = {
        id: taskPayload.id,
        title: taskPayload.title,
        description: taskPayload.description,
        cycles: taskPayload.cycles,
        target: taskPayload.target,
        completed: taskPayload.completed
    };
    const uuid = sha256(taskPayload.uid + secretCode);
    const userDocRef = db.collection("users").doc(uuid);
	const counter = taskPayload.edit ? taskCounter : taskCounter + 1;

    await userDocRef.update({
		taskCounter: counter,
        [`tasks.${task.id}`]: task,
        updated_at: taskPayload.updated_at
    });

	return counter;
}


export async function removeTaskByID(uid: string, id: number) {
	const uuid = sha256(uid + secretCode)

	const userDocRef = db.collection("users").doc(uuid);

	const user = (await userDocRef.get()).data() as User;
	const userTasks = user.tasks;
	delete userTasks[id]
	await userDocRef.update({
		tasks: userTasks
	});
}

export async function getAllTasks(uid: string) {
	const uuid = sha256(uid + secretCode)

	const userSnapshot = await db.collection("users").doc(uuid).get();
	const user: User = userSnapshot.data() as User;
    
	return user.tasks;
}