//Function to prompt user
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints(speed) {
    const SpeedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= SpeedLimit) {
        console.log("Ok");
        return 0; // No demerit points if speed is within limi
    } else {
        // Calculate the excess speed
        const excessSpeed = speed - SpeedLimit;
        
        // Calculate demerit points based on excess speed
        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);
        
        console.log(`Driver gets ${demeritPoints} demerit point(s).`);
        return demeritPoints;
    }
}

const speed = 80;
const totalDemeritPoints = calculateDemeritPoints(speed);
console.log(`Total demerit points: ${totalDemeritPoints}`);


