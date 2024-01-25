export interface PastActivities {
	[key: string]: number;
}

export interface User {
	sid: string,
	uid: string,
	email: string,
	first_name: string,
	last_name: string,
	past_activities: PastActivities,
	total_points: number,
	created_at: string,
	updated_at: string
}