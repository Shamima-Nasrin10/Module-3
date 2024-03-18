

function submitForm(event) {

    event.preventDefault();

    let fName = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let remark = document.getElementById('remark').value;


    let gender = document.querySelector('input[name="gender"]:checked').value;

    let courses = document.querySelectorAll('input[name="courses"]:checked');

    let location=document.getElementById('location').value;


    let courseValue = [];
    for (let index = 0; index < courses.length; index++) {

        courseValue.push(courses[index].value);

    }



    let output= "Name: "+fName+"\n";
    output+= "Contact: "+contact+"\n";
    output+= "Remarks: "+remark+"\n";
    output+= "Courses: "+courseValue+"\n";
    output+= "Location: "+location+"\n";



 let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "<pre>");


}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);