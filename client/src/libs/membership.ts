export default function checkStudentIDValidity(studentID: string) {
  const regex = /^\d{8}$/;

  if (!regex.test(studentID)) {
    const error = new Error("Invalid syntax");
    return error;
  }

  return undefined;
}
