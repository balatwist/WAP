

document.addEventListener("DOMContentLoaded", function () {
   let tableBody =document.getElementById("tbodyPatientsList")
   let form= document.querySelector("#myForm")

form.addEventListener("submit",function(event){

    event.preventDefault();

let patientIdNumber= document.getElementById("patientIdNumber").value;
let firstName= document.getElementById("firstName").value;
let middleInitials=document.getElementById("middleInitials").value;
let lastName= document.getElementById("lastName").value;
let dateOfBirth=document.getElementById("dateOfBirth").value;
let Department=document.getElementById("ddlDepartment").value;
let isOutPatient = document.querySelector('input[name="radioIsOutPatient"]:checked').value;


let row= tableBody.insertRow();

let r1=row.insertCell(0);
let r2=row.insertCell(1);
let r3=row.insertCell(2);
let r4=row.insertCell(3);
let r5=row.insertCell(4);
let r6=row.insertCell(5);
let r7=row.insertCell(6);

r1.textContent=patientIdNumber;
r2.textContent=firstName;
r3.textContent=middleInitials;
r4.textContent=lastName;
r5.textContent=dateOfBirth;
r6.textContent=Department;
r7.textContent=isOutPatient;


form.reset();


});


const chkElderlyPatients = document.getElementById('chkElderlyPatients');
chkElderlyPatients.addEventListener('change', function () {
    filterPatients();
});


const chkShowOutPatients = document.getElementById('chkShowOutPatients');
chkShowOutPatients.addEventListener('change', function () {
    filterPatients();
});


function filterPatients() {
    const showElderlyPatients = chkElderlyPatients.checked;
    const showOutPatients = chkShowOutPatients.checked;

    for (let i = 0; i < tableBody.rows.length; i++) {
        const row = tableBody.rows[i];
        const dateOfBirth = new Date(row.cells[4].textContent);
        const age = calculateAge(dateOfBirth);

        const isElderly = age >= 60;
        const isOutPatient = row.cells[6].textContent === 'Yes';

        row.style.display =
            (showElderlyPatients && isElderly) ||
            (showOutPatients && isOutPatient) ||
            (!showElderlyPatients && !showOutPatients)
                ? ''
                : 'none';
    }
}



function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
});

