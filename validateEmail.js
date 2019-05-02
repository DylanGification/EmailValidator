const EmailValidator = require('email-deep-validator');
const emailValidator = new EmailValidator();

verifyEmail();
async function validateEmail(email) {
    const {
        wellFormed, validDomain, validMailbox
    } = await emailValidator.verify(email);
    return [wellFormed, validDomain, validMailbox];
}

async function verifyEmail() {
    var name = "First Last";
    var website = "domain.com";
    var firstName = name.split(' ').slice(0, -1).join(' ');
    var lastName = name.split(' ').slice(-1).join(' ');
    var domain = "@" + website;
    var fname = firstName + domain;
    var lname = lastName + domain;
    var fInitialLastName = checkFinitialLastName(firstName, lastName) + domain;
    var fNameDotLName = checkFnameDotLname(firstName, lastName) + domain;
    var firstNameLastName = checkFnameLname(firstName, lastName) + domain;
    var fName_LName = checkFname_Lname(firstName, lastName) + domain;
    var lastNameFInitial = checkLNameFInitial(firstName, lastName) + domain;
    var firstDotLInitial = checkFirstDotLInitial(firstName, lastName) + domain;
    var firstLInitial = checkFirstLInitial(firstName, lastName) + domain;

    //check firstname - First@domain.com
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(fname)), 1000)
    });
    let fnameEmail = await promise1;
    console.log(fnameEmail, fname);

    //check first initalLastname - FLast@domain.com
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(fInitialLastName)), 1000)
    });
    let fInitialLastNameEmail = await promise2;
    console.log(fInitialLastNameEmail, fInitialLastName);

    //check first.last - First.Last@domain.com
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(fNameDotLName)), 1000)
    });
    let fNameDotLNameEmail = await promise3;
    console.log(fNameDotLNameEmail, fNameDotLName);

    //check firstlast - FirstLast@domain.com
    let promise4 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(firstNameLastName)), 1000)
    });
    let firstNameLastNameEmail = await promise4;
    console.log(firstNameLastNameEmail, firstNameLastName);

    //check first_last name - First_Last@domain.com
    let promise5 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(fName_LName)), 1000)
    });
    let fName_LNameEmail = await promise5;
    console.log(fName_LNameEmail, fName_LName);

    //check last name first initial - LastF@domain.com
    let promise6 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(lastNameFInitial)), 1000)
    });
    let lastNameFInitialEmail = await promise6;
    console.log(lastNameFInitialEmail, lastNameFInitial);

    // check first.last initial - First.L@domain.com
    let promise7 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(firstDotLInitial)), 1000)
    });
    let firstDotLInitialEmail = await promise7;
    console.log(firstDotLInitialEmail, firstDotLInitial);

    //check first name last initial - FirstL@domain.com
    let promise8 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(firstLInitial)), 1000)
    });
    let firstLInitialEmail = await promise8;
    console.log(firstLInitialEmail, firstLInitial);

    //check last name - Last@domain.com
    let promise9 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(validateEmail(lname)), 1000)
    });
    let lastNameEmail = await promise9;
    console.log(lastNameEmail, lname);
}

function checkFinitialLastName(first, last) {
    return first.slice(0, 1) + last;
}
function checkFnameDotLname(first, last) {
    return first + "." + last;
}

function checkFnameLname(first, last) {
    return first + last;
}

function checkFname_Lname(first, last) {
    return first + "_" + last;
}

function checkLNameFInitial(first, last) {
    return last + first.slice(0, 1);
}

function checkFirstLInitial(first, last) {
    return first + last.slice(0, 1);
}

function checkFirstDotLInitial(first, last) {
    return first + "." + last.slice(0, 1);
}