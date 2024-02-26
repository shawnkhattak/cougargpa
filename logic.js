const main = document.getElementById("main");

function addRow (n = 0) {
    var main = document.getElementById("main");

    const table_row = document.createElement('tr');

    const row_sem = document.createElement('td');
    const row_sem_input = document.createElement('input');
    row_sem_input.id = `semester-${n}`;
    row_sem.appendChild(row_sem_input);

    const row_course = document.createElement('td');
    const row_course_input = document.createElement('input');
    row_course_input.id = `course-${n}`;
    row_course.appendChild(row_course_input);

    const row_credits = document.createElement('td');
    const row_credits_input = document.createElement('select');
    row_credits_input.id = `credits-${n}`;
    var items = [" ",0,1,2,3,4,5];
    for (let i = 0; i < items.length; i++) {
        var option = document.createElement("option");
        option.text = items[i];
        row_credits_input.appendChild(option);
    }
    row_credits.appendChild(row_credits_input);

    const row_grade = document.createElement('td');
    const row_grade_input = document.createElement('select');
    row_grade_input.id = `grade-${n}`;
    var items = [" ", "A", "A-", "B+", "B", "B-","C+", 
                 "C", "C-", "D+", "D", "D-", "F", "NCR"];
    for (let i = 0; i < items.length; i++) {
        var option = document.createElement("option");
        option.text = items[i];
        row_grade_input.appendChild(option);
    }
    row_grade.appendChild(row_grade_input);

    table_row.appendChild(row_sem);
    table_row.appendChild(row_course);
    table_row.appendChild(row_credits);
    table_row.appendChild(row_grade);
    main.appendChild(table_row);
}

function removeRow () {
    last_row = main.lastElementChild;
    main.removeChild(last_row);
}

function createRow () {
    let main = document.getElementById("main");
    let n = main.childElementCount - 1;

    const table_row = document.createElement('tr');

    const row_sem = document.createElement('td');
    const row_sem_input = document.createElement('input');
    row_sem_input.id = `semester-${n}`;
    row_sem.appendChild(row_sem_input);

    const row_course = document.createElement('td');
    const row_course_input = document.createElement('input');
    row_course_input.id = `course-${n}`;
    row_course.appendChild(row_course_input);

    const row_credits = document.createElement('td');
    const row_credits_input = document.createElement('select');
    row_credits_input.id = `credits-${n}`;
    var items = [" ",0,1,2,3,4,5];
    for (let i = 0; i < items.length; i++) {
        var option = document.createElement("option");
        option.text = items[i];
        row_credits_input.appendChild(option);
    }
    row_credits.appendChild(row_credits_input);

    const row_grade = document.createElement('td');
    const row_grade_input = document.createElement('select');
    row_grade_input.id = `grade-${n}`;
    var items = [" ", "A", "A-", "B+", "B", "B-","C+", 
                 "C", "C-", "D+", "D", "D-", "F", "NCR"];
    for (let i = 0; i < items.length; i++) {
        var option = document.createElement("option");
        option.text = items[i];
        row_grade_input.appendChild(option);
    }
    row_grade.appendChild(row_grade_input);

    table_row.appendChild(row_sem);
    table_row.appendChild(row_course);
    table_row.appendChild(row_credits);
    table_row.appendChild(row_grade);
    main.appendChild(table_row);
}

for (let i = 0; i < 12; i++) {
    addRow(i);
}

function expandshrink() {
    var hiddenContent = document.getElementById("hidden");
    var expandBtn = document.getElementById("expander");
    
    if (hiddenContent.style.display == "none") {
        hiddenContent.style.display = "inline";
        expandBtn.innerHTML = "Show less";
    } else {
        hiddenContent.style.display = "none";
        expandBtn.innerHTML = "Show more";
        
    }
  }

function loadTable() {
    const main = document.getElementById("main");
    var loadedJsonString = localStorage.getItem("table_data");
    var table_data = JSON.parse(loadedJsonString);

    // check and add more rows if needed
    while (table_data.length >= main.childElementCount) {
        createRow();
        
    }

    for (var i = 0; i < table_data.length; i++) {
        var table_row = main.children[i+1].children;
        table_row[0].children[0].value = table_data[i].semester || "";
        table_row[1].children[0].value = table_data[i].course || "";
        table_row[2].children[0].value = table_data[i].credits || "";
        table_row[3].children[0].value = table_data[i].grade || "";
    }

    console.log("Data Was Loaded");

}