let studentName = "John Doe";
let studentID = 12345;
let studentGrade = 85;

console.log(`Student Name: ${studentName}, ID: ${studentID}, Grade: ${studentGrade} is added to the system.`);

if (studentGrade >= 90) {
    console.log(`${studentName} has an excellent grade!`);
} else if (studentGrade >= 80) {
    console.log(`${studentName} has a good grade.`);
} else {
    console.log(`${studentName} needs to improve their grade.`);
}