import { Schema } from "../validators/ingress.validators";

export const userCreation: Schema = {
    fields: {
		sid: "string",
		uid: "string",
		email: "string",
		first_name: "string",
		last_name: "string",
		created_at: "string",
		updated_at: "string"
    },
    required: [
		"sid",
		"uid",
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
