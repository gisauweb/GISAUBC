import { Schema } from "../validators/ingress.validators";

export const userCreation: Schema = {
    fields: {
		sid: "string",
		email: "string",
		first_name: "string",
		last_name: "string",
		picture: "string",
		created_at: "string",
		updated_at: "string"
    },
    required: [
		"sid",
		"email",
		"first_name",
		"last_name",
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
        sid: "string",
    },
    required: [
        "sid",
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
