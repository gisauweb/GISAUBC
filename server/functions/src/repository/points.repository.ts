import { sha256 } from "js-sha256";
import { db } from "./../index"
import { AddPointsModel } from "../middleware/interfaces/points.interfaces";
import { PastActivities, User } from "../model/user";

const secretCode = process.env.HASH_SECRET_CODE;
const MAX_POINTS_LIMIT = 300

export async function addPoints(user: User, pointsPayload: AddPointsModel) {
	const date = pointsPayload.updated_at.split(" ")[0];

	const uuid = sha256(pointsPayload.uid + secretCode);
	const userDocRef = db.collection("users").doc(uuid);
	const total_points = user.total_points || 0 ;
	
	let points = pointsPayload.points;
	if (user.past_activities && user.past_activities[date] + pointsPayload.points > MAX_POINTS_LIMIT ) {
		points = MAX_POINTS_LIMIT - user.past_activities[date]
	}
	const pastActivities = handlePastActivities(points, user.past_activities, date);
	const totalPoints = total_points + points;
	await userDocRef.update({
		total_points: totalPoints,
		past_activities: pastActivities,
		updated_at: pointsPayload.updated_at
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


function handlePastActivities(points: number, pastActivities: PastActivities, date: string) {
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
	
	// Convert the pastActivities object into an array and sort it by date
	const sortedActivitiesArray = Object.entries(pastActivities).sort((a, b) => {
		// Convert the date strings back into Date objects for comparison
		const dateA = new Date(a[0].replace(/ /g, ", ")); // Adjust format to original for proper conversion
		const dateB = new Date(b[0].replace(/ /g, ", ")); // Adjust format to original for proper conversion
		return dateA.getTime() - dateB.getTime();
	});

	// Convert the sorted array back into an object
	const sortedActivities = sortedActivitiesArray.reduce((obj, [key, value]) => {
		obj[key] = value;
		return obj;
	}, {} as PastActivities);

	return sortedActivities;
}