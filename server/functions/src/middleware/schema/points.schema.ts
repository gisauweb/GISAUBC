import { Schema } from "../validators/ingress.validators";

export const addPoints: Schema = {
    fields: {
		uid: "string",
		points: "number",
		updated_at: "string"
    },
    required: [
		"uid",
		"points",
		"updated_at"
    ],
};

export const getLeaderboard: Schema = {
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
