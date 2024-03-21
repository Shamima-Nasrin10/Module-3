

function submitForm(event) {

    event.preventDefault();

    let fName = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remark = document.getElementById('remark').value;

    let sex = document.querySelector('input[name="sex"]:checked').value;

    let courses = document.querySelectorAll('input[name="courses"]:checked');

    let location = document.getElementById('location').value;


    let coursesArray = [];
    for (let i = 0; i < courses.length; i++) {
        coursesArray.push(courses[i].value);
    }



    let output = 'Full Name:' + fName + '\n';
    output += 'Contact:' + contact + '\n';
    output += 'Remarks:' + remark + '\n';
    output += 'Sex:' + sex + '\n';
    output += 'Courses:' + coursesArray + '\n';
    output += 'Location:' + location + '\n';

    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "</pre>");



}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);