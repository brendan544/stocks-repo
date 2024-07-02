Function calculateDemeritPoints(speed) {
    const SpeedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed <= SpeedLimit) {
        console.log("Ok");
        return 0; 
    } else {
       
        const excess speed = speed - SpeedLimit;
        const demerit points = Math.floor(excess speed / kmPerDemeritPoint);
        
        console.log(`Driver gets ${demeritPoints} demerit point(s).`);
        return demerit points;
    }
}


const speed = 80;
const totalDemeritPoints = calculateDemeritPoints(speed);
console.log(`Total demerit points: ${totalDemeritPoints}`);
