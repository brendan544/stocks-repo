const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function prompt(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


function alert(message) {
    console.log(message);
}

async function calculateGrade() {
    let marks;
    while (true) {
        let input = await prompt("Enter student marks (0-100): ");
        marks = parseInt(input);
        if (!isNaN(marks) && marks >= 0 && marks <= 100) {
            break;
        } else {
            alert("Marks should be a number between 0 and 100. Please try again.");
        }
    }

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

    alert(`For ${marks} marks, the grade is ${grade}`);

    rl.close
}


calculateGrade();
