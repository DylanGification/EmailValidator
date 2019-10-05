const EmailValidator = require('email-deep-validator');
const emailValidator = new EmailValidator();

const validateEmail = async (email) => {
    const {
        wellFormed, validDomain, validMailbox
    } = await emailValidator.verify(email);
    return [wellFormed, validDomain, validMailbox];
}

const verifyEmail = async () => {
    let name = "First Last";
    let website = "live.com";
    let firstName = name.split(' ').slice(0, -1).join(' ');
    let lastName = name.split(' ').slice(-1).join(' ');
    let domain = "@" + website;
    let fname = firstName + domain;
    let lname = lastName + domain;
    let fInitialLastName = checkFinitialLastName(firstName, lastName) + domain;
    let fNameDotLName = checkFnameDotLname(firstName, lastName) + domain;
    let firstNameLastName = checkFnameLname(firstName, lastName) + domain;
    let fName_LName = checkFname_Lname(firstName, lastName) + domain;
    let lastNameFInitial = checkLNameFInitial(firstName, lastName) + domain;
    let firstDotLInitial = checkFirstDotLInitial(firstName, lastName) + domain;
    let firstLInitial = checkFirstLInitial(firstName, lastName) + domain;

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

const checkFinitialLastName = (first, last) =>  first.slice(0, 1) + last;

const checkFnameDotLname = (first, last) => first + "." + last;

const checkFnameLname = (first, last) => first + last;

const checkFname_Lname = (first, last) => first + "_" + last;

const checkLNameFInitial = (first, last) => last + first.slice(0, 1);

const checkFirstLInitial = (first, last) => first + last.slice(0, 1);

const checkFirstDotLInitial = (first, last) => first + "." + last.slice(0, 1);

verifyEmail();