const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to  prompt user for input
function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// display alert messages
function alert(message) {
    console.log(message);
}

async function calculateGrade() {
    let marks;
    // Loop until valid marks are entered
    while (true) {
        let input = await prompt("Enter student marks (0-100): ");
        marks = parseInt(input);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            break;
        } else {
            alert("Marks should be a number between 0 and 100. Please try again.");
        }
    }
    // Determine grade based on marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
   // Display the grade
    alert(`For ${marks} marks, the grade is ${grade}`);
  // Close the readline interface
    rl.close
}


calculateGrade();
