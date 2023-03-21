// Challenge 1: Student Grade Generator
// Prompt the user to input the student marks 
function generateGrade() {
  const marks = document.getElementById("marks").value;
// Check if the input is between 0 and 100
  if (marks >= 0 && marks <= 100) {
    let grade = "";
  // Grade based on inputed marks
  
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }
//generator output
document.getElementById("output").innerHTML = `Student Grade: ${grade}`;
} else {
  document.getElementById("output").innerHTML = "Invalid input";
}
}


