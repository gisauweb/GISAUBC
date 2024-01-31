import { Schema } from "../validators/ingress.validators";

export const userCreation: Schema = {
    fields: {
		sid: "string",
		uid: "string",
		profile_picture: "string",
		first_name: "string",
		last_name: "string",
		email: "string",
		created_at: "string",
		updated_at: "string"
    },
    required: [
		"sid",
		"uid",
		"profile_picture",
		"email",
		"first_name",
		"last_name",
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
        uid: "string",
    },
    required: [
        "uid",
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
