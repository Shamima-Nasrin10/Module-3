



function submitForm(event) {

    event.preventDefault();

    let fName = document.getElementById('firstName').value;
    let lName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let address = document.getElementById('address').value;

    let gender = document.querySelector('input[name="gender"]:checked').value;

    let hobby = document.querySelectorAll('input[name="hobby"]:checked');

    let course = document.getElementById('course').value;

    let hobbyValue = [];
    for (let index = 0; index < hobby.length; index++) {

        hobbyValue.push(hobby[index].value);

    }

//Start Validation


if(fName==''){
alert("Name cannot be empty.");
return;
}
else if(fName.length<=3){
    alert("Name must have at least 4 character.");
    return;
}

const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(regEx.test(email)){

}
else{
    alert("Not a valid email address");
    return;
}

//Password validation

if(password.length<6 || password.length>20){
alert("Password length must be between 6 and 20 characters");
return;
}

//Gender validation

if(gender==null){
alert("Gender must be selected");
return;
}
if(hobby.length==0){
alert("Select at least one hobby");
return;
}

//End Validation








    let output = "First Name: " + fName + "\n";
    output += "Last Name: " + lName + "\n";
    output += "Email: " + email + "\n";
    output += "Password: " + password + "\n";
    output += "Address: " + address + "\n";
    output += "Gender: " + gender + "\n";
    output += "Hobby: " + hobbyValue + "\n";
    output += "Course: " + course + "\n";


    let newWindow = window.open("", '_blank');
    newWindow.document.write("<pre>" + output + "<pre>");


}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', submitForm);