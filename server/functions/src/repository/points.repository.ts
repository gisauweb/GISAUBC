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
    let rankNum = 1;
	let previousUserPoints: number | null = null;

    const leaderboardSnapshot = await db.collection("users")
        .orderBy("total_points", "desc")
        .get();

    const leaderboardData = leaderboardSnapshot.docs.map(doc => doc.data());

    const leaderboard = leaderboardData.reduce((acc, data) => {
		let pointsToNextRank = null;
        if (previousUserPoints !== null) {
            pointsToNextRank = previousUserPoints - data.total_points;
        }

        acc[data.uid] = {
            uid: data.uid,
			rank: rankNum,
            profilePicture: data.profile_picture,
            nickname: data.nickname,
            points: data.total_points,
			target: pointsToNextRank || 0,
			targetPoints: previousUserPoints || data.total_points,
        };

		previousUserPoints = data.total_points;
        rankNum += 1;

        return acc;
    }, {});

    return leaderboard;
}


function handlePastActivities(points: number, pastActivities: PastActivities, dateTimestamp: string) {
	const date = dateTimestamp.split(" ")[0]
	
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