window.onload = display;

async function display() {
    let response = await fetch("http://localhost:5000/students");
    let json;
    if (response.ok) {
        json = await response.json();
        for (let e of json) {
            addRowToTable(e.id, e.name, e.program)
            addOptionToDropdownForDelete(e.id);
            addOptionToDropdownForUpdate(e.id);
            


        }
    }
    else alert("Error" + response.status);

}

function addRowToTable(id, name, program) {
    let row = document.createElement('tr');
    row.setAttribute("id", id);
    for (let e of arguments) {
        let cell = document.createElement('td');
        cell.appendChild(document.createTextNode(e));
        row.appendChild(cell);
    }
    document.getElementById('tbodyStudentList').appendChild(row);

}

async function addStudent(id, name, program) {
    let obj = { id, name, program };
    let setting = {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch("http://localhost:5000/students", setting);
    if (response.ok) {
        addRowToTable(id, name, program);
    } else alert("Error " + response.status);

}

document.getElementById('btnRegister').addEventListener("click", () => {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let program = document.getElementById('program').value;
    addStudent(id, name, program);
    document.getElementById('myform').reset()
});

function addOptionToDropdownForDelete(id) {
    let option = document.createElement('option');
    option.value = id;
    option.appendChild(document.createTextNode(id));
    document.getElementById('ddlStudent').appendChild(option);
}


document.getElementById('btnDelete').addEventListener("click", () => {
    let selectedId = document.getElementById('ddlStudent').value;
    if (selectedId) {
        deleteStudent(selectedId);
    } else {
        alert("Please select a student ID to delete.");
    }
});


async function deleteStudent(id) {
    let setting = {
        method: "DELETE",
        headers: { "Content-Type": 'application/json' }
    }
    let response = await fetch(`http://localhost:5000/students/${id}`, setting);
    if (response.ok) {
        // Remove the deleted student from the dropdown
        document.getElementById('ddlStudent').remove(document.getElementById('ddlStudent').selectedIndex);
        alert("Student deleted successfully.");
    } else {
        alert("Error " + response.status);
    }
}

function addOptionToDropdownForUpdate(id) {
    let option = document.createElement('option');
    option.value = id;
    option.appendChild(document.createTextNode(id));
    document.getElementById('ddlStudentForUpdate').appendChild(option);
}

document.getElementById('btnUpdate').addEventListener("click", () => {
    let selectedId = document.getElementById('ddlStudentForUpdate').value;
    if (selectedId) {
        let updatedId = document.getElementById('idForUpdate').value;
        let updatedName = document.getElementById('nameForUpdate').value;
        let updatedProgram = document.getElementById('programForUpdate').value;
        updateStudent(selectedId, updatedId, updatedName, updatedProgram);
    } else {
        alert("Please select a student ID to update.");
    }
});


async function updateStudent(id, updatedId, updatedName, updatedProgram) {
    let obj = { id: updatedId, name: updatedName, program: updatedProgram };
    let setting = {
        method: "PUT",
        body: JSON.stringify(obj),
        headers: { "Content-Type": 'application/json' }
    }


    let response = await fetch(`http://localhost:5000/students/${id}`, setting);

    if (response.ok) {
        alert("Student updated successfully.");
        
        display();
    } else {
        alert("Error " + response.status);
    }
}


