import { sha256 } from "js-sha256";
import { createUserModel, editUserModel } from "../middleware/interfaces/user.interfaces";
// import { User } from "../model/user";
import { db } from "./../index"

const secretCode = process.env.HASH_SECRET_CODE;

export async function createUser(userPayload: createUserModel) {
	const uuid = sha256(userPayload.uid + secretCode)
	const userDocRef = db.collection("users").doc(uuid);
	await userDocRef.set({
		sid: userPayload.sid,
		uid: userPayload.uid,
		profile_picture: userPayload.profile_picture,
		first_name: userPayload.first_name,
		last_name: userPayload.last_name,
		email: userPayload.email,
		total_points: 0,
		created_at: userPayload.created_at,
		updated_at: userPayload.updated_at
	});

	const registeredDocRef = db.collection("registered").doc(userPayload.sid);
	await registeredDocRef.set({
		sid: userPayload.sid,
	});
}

export async function removeUser(uid: string) {
	const uuid = sha256(uid + secretCode)

	return await db.collection("users").doc(uuid).delete();
}

export async function getUserByUID(uid: string) {
	const uuid = sha256(uid + secretCode)
	const snapshot = await db.collection("users").doc(uuid).get();

	return snapshot.data();
}

export async function editUser(editPayload: editUserModel) {
	const uuid = sha256(editPayload.uid + secretCode)
	const userDocRef = await db.collection("users").doc(uuid);

	await userDocRef.update({
		nickname: editPayload.nickname,
	});
}

export async function getAllUsers() {
	const snapshot = await db.collection("users").get();
    return snapshot.docs.map(doc => {
		return doc.data();
	});
}

export async function getMembershipBySID(sid: string) {
	const snapshot = await db.collection("memberships").doc(sid).get();

	return snapshot.data();
}

export async function getRegisteredMemberBySID(sid: string) {
	const snapshot = await db.collection("registered").doc(sid).get();

	return snapshot.data();
}