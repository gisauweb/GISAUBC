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

export interface AddPointsModel {
	uid: string,
	points: number,
	updated_at: string
}

export interface GetUsersModel {
    startNumber: number,
    pageSize: number
}

export interface GetUserModel {
    uid: string
}

export interface UpdateUserPhoneModel {
    id: string,
    phone: string
}
