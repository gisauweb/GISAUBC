export default function getCurrentTimestamp() {
    const currentDate: Date = new Date();

    // Format date and time in PST time zone
    const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles", // This represents both PST and PDT depending on daylight saving
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false // Use 24-hour format
    };

    // Format the date using PST time zone
    const completeTimestamp = currentDate.toLocaleString("en-US", options);

    // Replace commas and standardize format
    const formattedTimestamp = completeTimestamp.replace(/, /g, " ")
    return formattedTimestamp;
}
