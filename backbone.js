function dropdown(x,y) {
    for (var i = 0; i < x.length; i++) {
        for (key in x[i]) {
            result += x[i][key] + " ";
        }
        document.getElementById('y').innerHTML = "<option value=" + 'result' + '>' + result + '</option>';

    }

    }
function student_add() {
    allStudents.push(new Student(document.getElementById("student_first").value, document.getElementById("student_last").value, document.getElementById("student_grade").value));
    allItems.push(new Student(document.getElementById("student_first").value, document.getElementById("student_last").value, document.getElementById("student_grade").value));
}

function teacher_add() {
    allTeachers.push(new Teacher(document.getElementById("teacher_first").value, document.getElementById("teacher_last").value, document.getElementById("teacher_class").value));
    allItems.push(new Teacher(document.getElementById("teacher_first").value, document.getElementById("teacher_last").value, document.getElementById("teacher_class").value));
}

function section_add() {
    allSections.push(new Section(document.getElementById("section_name").value, document.getElementById("student_count").value));
    allItems.push(new Section(document.getElementById("section_name").value, document.getElementById("student_count").value));
}

function student_remove() {
    var student_id = document.getElementById("rstudent_id").value;
    var section = getSectionById(document.getElementById("rsection_id").value);
    for (var i = 0; section.studentList.length; i++) {
        if (section.studentList[i].id == student_id) {
            section.studentList.splice(i);
            return
        }
    }
}

function student_section() {
    var studentObj = getStudentById(document.getElementById("student_id").value);
    var sectionObj = getSectionById(document.getElementById("section_id").value);
    sectionObj.studentList.push(studentObj);
}

function listItems(list) {
    var selection = document.getElementById("list").value;

    if (selection == 0) {
        listStudents()
    }
    if (selection == 1) {
        listTeachers()
    }
    if (selection == 2) {
        listSections()
    }
}

    function listAll() {
        var html = "<table border='1'>";
        for (var i = 0; i < allStudents.length; i++) {
            html += "<tr>";
            html += '<td>' + allStudents[i].id + "</td>";
            html += "<td>" + allStudents[i].firstName + "</td>";
            html += "<td>" + allStudents[i].lastName + "</td>";
            html += "<td>" + allStudents[i].grade + "</td>";
            html += "</tr>"
        }for (var x = 0; x < allTeachers.length; x++) {
            html += "<tr>";
            html += "<td>" + allTeachers[x].id + "</td>";
            html += "<td>" + allTeachers[x].firstName + "</td>";
            html += "<td>" + allTeachers[x].lastName + "</td>";
            html += "<td>" + allTeachers[x].subject + "</td>";
            html += "</tr>"
        }for (var z = 0; z < allSections.length; z++) {
            html += "<tr>";
            html += "<td>" + allSections[z].id + "</td>";
            html += "<td>" + allSections[z].firstName + "</td>";
            html += "<td>" + allSections[z].count + "</td>";
            html += "</tr>"
        }
        html += "</table>";
        document.getElementById('listOutput').innerHTML = html;

    }

    function getStudentById(studentID) {
        for (var i = 0; i < allStudents.length; i++) {
            if (allStudents[i].id == studentID) {
                return allStudents[i];
            }
        }
    }

    function getSectionById(sectionID) {
        for (var i = 0; i < allSections.length; i++) {
            if (allSections[i].id == sectionID) {
                return allSections[i];
            }
        }
    }

    function getTeacherById(teacherID) {
        for (var i = 0; i < allTeachers.length; i++) {
            if (allTeachers[i].id == teacherID) {
                return allTeachers[i];
            }
        }
    }

    function listTeachers() {
        var html = "<table border='1'>";
        for (var i = 0; i < allTeachers.length; i++) {
            html += "<tr>";
            html += "<td>" + allTeachers[i].id + "</td>";
            html += "<td>" + allTeachers[i].firstName + "</td>";
            html += "<td>" + allTeachers[i].lastName + "</td>";
            html += "<td>" + allTeachers[i].subject + "</td>";
            html += "</tr>"
        }
        html += "</table>";
        document.getElementById('listOutput').innerHTML = html;
        }

    function listStudents() {
        var html = "<table border='1'>";
        for (var i = 0; i < allStudents.length; i++) {
            html += "<tr>";
            html += "<td>" + allStudents[i].id + "</td>";
            html += "<td>" + allStudents[i].firstName + "</td>";
            html += "<td>" + allStudents[i].lastName + "</td>";
            html += "<td>" + allStudents[i].grade + "</td>";
            html += "</tr>"
        }
        html += "</table>";
        document.getElementById('listOutput').innerHTML = html;
    }

    function listSections() {
        var html = "<table border='1'>";
        for (var i = 0; i < allSections.length; i++) {
            html += "<tr>";
            html += "<td>" + allSections[i].id + "</td>";
            html += "<td><a href='#' onclick='listStudentsInSection(" + allSections[i].id +  ")'>" + allSections[i].firstName + "</a></td>";
            html += "<td>" + allSections[i].count + "</td>";
            html += "</tr>"
        }
        html += "</table>";
        document.getElementById('listOutput').innerHTML = html;
    }
function listStudentsInSection(section, thing) {
    console.log(allSections[section].firstName)
    var html = "<table border='1'>";
    html += "<tr>";
    html += "<td> +  + </td>";
    html += "<tr>";
    document.getElementById("listOutput").innerHTML = html;
}
