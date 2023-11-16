import { createUserModel } from "../middleware/interfaces/user.interfaces";
// import { User } from "../model/user";
import { db } from "./../index"


export async function createUserRepository(userPayload: createUserModel) {
	const userDocRef = db.collection("users").doc(userPayload.sid);
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

export async function getUserRepositoryBySID(sid: string) {
	const snapshot = await db.collection("users").doc(sid).get();

	return snapshot.data();
}