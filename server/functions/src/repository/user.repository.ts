import { sha256 } from "js-sha256";
import { createUserModel } from "../middleware/interfaces/user.interfaces";
// import { User } from "../model/user";
import { db } from "./../index"

const secretCode = process.env.HASH_SECRET_CODE;

export async function createUser(userPayload: createUserModel) {
	const uuid = sha256(userPayload.sid + secretCode)
	const userDocRef = db.collection("users").doc(uuid);
	await userDocRef.set({
		sid: userPayload.sid,
		first_name: userPayload.first_name,
		last_name: userPayload.last_name,
		picture: userPayload.picture,
		email: userPayload.email,
		created_at: userPayload.created_at,
		updated_at: userPayload.updated_at
	});
}

export async function removeUser(sid: string) {
	const uuid = sha256(sid + secretCode)

	return await db.collection("users").doc(uuid).delete();
}

export async function getUserBySID(sid: string) {
	const uuid = sha256(sid + secretCode)
	const snapshot = await db.collection("users").doc(uuid).get();

	return snapshot.data();
}

export async function getAllUsers() {
	const snapshot = await db.collection("users").get();
    return snapshot.docs.map(doc => {
		return doc.data();
	});
}