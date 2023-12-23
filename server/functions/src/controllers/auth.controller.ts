// import { Request, Response, NextFunction } from "express";
// // import { User } from "../model/user";
// import { createUser } from "./user.controller";


// export async function validateUser(req: Request, res: Response, next: NextFunction) {
// 	try {
// 		// const user: User = req.oidc.user as User;
// 		const userExists = true

// 		if (!userExists) {
// 			try {
// 				return await createUser(req, res, next);
// 			} catch (error) {
// 				return handleError(res, error)
// 			}
// 		}
// 	} catch (err) {
// 		return handleError(res, err);
// 	}
// 	return;
// }

// // async function checkUserExistence(useCollectionName: string, user: User, res: Response): Promise<boolean> {
// // 	const userID = user.id;

// // 	await admin.auth().getUser(userID).then(async (userRecord) => {

// // 		await GLOBAL_VARIABLES.setMana.collection(useCollectionName).where("ID", "==", userRecord.uid).get().then(async (querySnapshot) => {
// // 			if (querySnapshot.empty) {
// // 				return Promise.resolve(false);
// // 			}

// // 		}).catch((error) => {
// // 			return res.status(400).send(error);
// // 		});

// // 	}).catch((error) => {
// // 		return res.status(400).send(error);
// // 	});

// // 	return Promise.reject(true);
// // }

// function handleError(res: Response, err: any) {
// 	return res.status(500).send({ message: `${err.code} - ${err.message}` });
// }