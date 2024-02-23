

function calculate () {
    var table_data = grabTableData().filter(dict => dict.gradepoints > 0);
    var student_gradepoints = 0;
    var student_total_hours = 0;

    for (var i = 0; i < table_data.length; i++) {
        student_gradepoints += table_data[i].gradepoints;
        student_total_hours += Number(table_data[i].credits);
    }

    var student_gpa = (student_gradepoints / student_total_hours) || 0;

    document.getElementById("totalGradePoints").innerHTML = student_gradepoints.toFixed(2);
    document.getElementById("totalCreditHours").innerHTML = student_total_hours.toFixed(2);
    document.getElementById("totalGpa").innerHTML = student_gpa.toFixed(2);



    console.log(student_gpa, student_total_hours);
}

const gradeWeights = {
    "A": 4.00,
    "A-": 3.67,
    "B+": 3.33,
    "B": 3.00,
    "B-": 2.67,
    "C+": 2.33,
    "C": 2.00,
    "C-": 1.67,
    "D+": 1.33,
    "D": 1.00,
    "D-": 0.67,
    "F": 0.00
};

function grabTableData () {
    const main = document.getElementById("main");
    var table_data = [];

    for (var i = 1; i < main.childElementCount; i++) {
        var table_row = main.children[i].children;
        var row_semester = table_row[0].children[0].value;
        var row_course = table_row[1].children[0].value;
        var row_credits = table_row[2].children[0].value;
        var row_grade = table_row[3].children[0].value;

        if (row_grade in gradeWeights) {var row_gradepoints = row_credits * gradeWeights[row_grade];}
        else {var row_gradepoints = 0;}
        table_data.push({
            "index": i - 1,
            "semester": row_semester,
            "course": row_course,
            "credits": row_credits,
            "grade": row_grade,
            "gradepoints": row_gradepoints

        });
    }
    return table_data;

}

function saveTable() {
    var table_data = grabTableData();
    var jsonString = JSON.stringify(table_data);
    localStorage.setItem("table_data", jsonString);
    console.log("Data Was Saved");

}

function clearTable() {
    var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
        elements[ii].value = "";
    }
    var elements = document.getElementsByTagName("select");
    for (var ii=0; ii < elements.length; ii++) {
        elements[ii].value = "";
    }

    console.log("Table Was Cleared");
}

