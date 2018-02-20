var allTeachers = [];
var allStudents = [];
var allSections = [];
var allItems = [];

var id = 1;

function Student(firstName,lastName,grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
    this.id = id++;

}

function Teacher(firstName,lastName,subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.id = id++;


}

function Section(firstName,count) {
    this.firstName = firstName;
    this.count = count;
    this.id = id++;
    this.studentList = [];
}