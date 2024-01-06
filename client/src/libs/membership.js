export default function checkStudentIDValidity(studentID) {
	const regex = /^\d{8}$/;

	if (!regex.test(studentID)) {
		const error = new Error('Invalid syntax');
		error.code = 400;
		return error;
	}

	return undefined;
}
