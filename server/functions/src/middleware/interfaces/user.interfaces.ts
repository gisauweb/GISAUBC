/* eslint-disable padded-blocks */
/* eslint-disable require-jsdoc */

import * as admin from "firebase-admin";

export function mapUser(user: admin.auth.UserRecord) {

    const customClaims = (user.customClaims || { role: [""] } || { accountType: "" }) as {
        role?: string[] | undefined;
        accountType?: string | undefined;
    };

    const role = customClaims.role ? customClaims.role : [""];
    const accountType = customClaims.accountType ? customClaims.accountType : "";
    return {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        role,
        accountType,
        photoURL: user.photoURL || "",
        lastSignInTime: user.metadata.lastSignInTime,
        creationTime: user.metadata.creationTime,
        verified: user.emailVerified,
        phoneNumber: user.phoneNumber || "",
    };

}

export interface createUserModel {
	sid: string,
	uid: string,
	profile_picture: string,
	first_name: string,
	last_name: string,
	nickname: string,
	email: string,
	past_activities: object,
	created_at: string,
	updated_at: string
}

export interface getUsersModel {
    startNumber: number,
    pageSize: number
}

export interface getUserModel {
    uid: string
}

export interface editUserModel {
    uid: string,
	nickname: string
}

export interface updateUserPhoneModel {
    id: string,
    phone: string
}
