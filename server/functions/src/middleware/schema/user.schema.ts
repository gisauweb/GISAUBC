import { Schema } from "../validators/ingress.validators";

export const userCreation: Schema = {
    fields: {
		sid: "string",
		email: "string",
		email_verified: "boolean",
		nickname: "string",
		picture: "string",
		created_at: "string",
		updated_at: "string"
    },
    required: [
		"sid",
		"email",
		"email_verified",
		"nickname",
		"picture",
		"created_at",
		"updated_at"
    ],
};

export const getUsersSchema: Schema = {
    fields: {
        startNumber: "number",
        pageSize: "number",
    },
    required: [],
};

export const getUserSchema: Schema = {
    fields: {
        id: "string",
    },
    required: [
        "id",
    ],
};

export const updateUserPhoneSchema: Schema = {
    fields: {
        id: "string",
        phone: "string",
    },
    required: [
        "id",
        "phone",
    ],
};