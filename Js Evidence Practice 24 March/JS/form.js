

function submitForm(event) {

    event.preventDefault();

    let fName = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let sex = document.querySelector('input[name="sex"]:checked').value;

    let courses = document.querySelectorAll('input[name="courses"]:checked');

    let location = document.getElementById('location').value;


    let coursesArray = [];
    for (let i = 0; i < courses.length; i++) {
        coursesArray.push(courses[i].value);
    }

    let output = "Name: " + fName + "\n";
    output += "Email: " + email + "\n";
    output += "Sex: " + sex + "\n";
    output += "Courses: " + coursesArray + "\n";
    output += "Location: " + location + "\n";


    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");


}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);