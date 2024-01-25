import { sha256 } from "js-sha256";
import { db } from "./../index"
import { AddPointsModel } from "../middleware/interfaces/points.interfaces";
import { PastActivities, User } from "../model/user";

const secretCode = process.env.HASH_SECRET_CODE;

export async function addPoints(user: User, userPayload: AddPointsModel) {
	const uuid = sha256(userPayload.uid + secretCode)
	const userDocRef = db.collection("users").doc(uuid);
	const total_points = user.total_points || 0 
	const totalPoints = total_points + userPayload.points;
	const pastActivities = handlePastActivities(userPayload.points, user.past_activities, userPayload.updated_at)
	await userDocRef.update({
		total_points: totalPoints,
		past_activities: pastActivities,
		updated_at: userPayload.updated_at
	});
}

export async function getLeaderboard() {
	const leaderboardSnapshot = await db.collection("users")
		.orderBy("total_points", "desc")
		.limit(10)
		.get();

	const leaderboardData = leaderboardSnapshot.docs.map(doc => {
		return doc.data()
	});

	const leaderboard = leaderboardData.map(data => ({
		profilePicture: data.profile_picture,
		firstName: data.first_name,
		points: data.total_points
	}))

	return leaderboard;
}


function handlePastActivities(points: number, pastActivities: PastActivities, dateTimestamp: string) {
	const date = dateTimestamp.split(" ")[0]
	
	console.log(date);
	if (!pastActivities || !(date in pastActivities)) {
		pastActivities = {
			...pastActivities,
			[date]: points
		};
	} else {
		const currentPoint = pastActivities[date]
		pastActivities = {
			...pastActivities,
			[date]: currentPoint + points
		}
	}
	
	return pastActivities;
}