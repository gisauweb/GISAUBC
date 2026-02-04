class User {
  firstName: string;
  lastName: string;
  studentId: string;
  faculty: string;
  membershipType: string;
  yearOfStudy: string;
  role: string;
  lookingForward: string;

  constructor(
    firstName: string,
    lastName: string,
    studentId: string,
    faculty: string,
    membershipType: string,
    yearOfStudy: string,
    lookingForward: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = studentId;
    this.faculty = faculty;
    this.membershipType = membershipType;
    this.yearOfStudy = yearOfStudy;
    this.role = "";
    this.lookingForward = lookingForward;
  }
}
