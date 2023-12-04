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
		nickname: userPayload.nickname,
		picture: userPayload.picture,
		email: userPayload.email,
		email_verified: userPayload.email_verified,
		created_at: userPayload.created_at,
		updated_at: userPayload.updated_at
	});
}

export async function getUserBySID(sid: string) {
	// const uuid = sha256(sid + secretCode)
	const snapshot = await db.collection("users").doc(sid).get();

	return snapshot.data();
}

export async function getAllUsers() {
	const snapshots = await db.collection("users").get();
	const results: any = [];
	snapshots.forEach((snapshot) => {
		results.push(snapshot.data())
	})

	return results;
}