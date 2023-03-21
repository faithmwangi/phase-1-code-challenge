// Challenge 1: Student Grade Generator
// Prompt the user to input the student marks 
const marks = prompt("Enter student marks (between 0 and 100): ");

// Check if the input is between 0 and 100
if (marks >= 0 && marks <= 100) {
  // Grade based on inputed marks
  let message = "Student Grade: ";
  if (marks > 79) {
    alert(`${message}A`);
  } else if (marks >= 60 && marks <= 79) {
    alert(`${message}B`);
  } else if (marks >= 50 && marks <= 59) {
    alert(`${message}C`);
  } else if (marks >= 40 && marks <= 49) {
    alert(`${message}D`);
  } else {
    alert(`${message}E`);
  }
} else {
  // Input is not between 0 and 100
  alert("Invalid input");
}



