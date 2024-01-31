export default function getCurrentTimestamp() {
	const timestamp: number = Date.now();

	// Create a new Date object using the timestamp
	const date: Date = new Date(timestamp);

	// Get date components
	const month: string = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
	const day: string = date.getDate().toString().padStart(2, "0");
	const year: number = date.getFullYear();

	// Get time components
	const hours: string = date.getHours().toString().padStart(2, "0");
	const minutes: string = date.getMinutes().toString().padStart(2, "0");
	const seconds: string = date.getSeconds().toString().padStart(2, "0");

	// Format the complete timestamp as "mm/dd/yyyy hh:mm:ss"
	const completeTimestamp = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

	return completeTimestamp;
}
