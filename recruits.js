const firstName = prompt("Enter your first name");
const lastName = prompt("Enter your last name");
const workArea = prompt("What is your work area?");
const bornYear = prompt("Put your birth year");

alert(
  "User successfully registered!\n" +
    "\nComplete Name: " +
    firstName +
    " " +
    lastName +
    "\nWork Area: " +
    workArea +
    "\nAge: " +
    (2022 - bornYear)
);
