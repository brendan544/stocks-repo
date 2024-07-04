const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateNetSalary(basicSalary, benefits) {
    const TaxBrackets = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24001, max: 32333, rate: 0.25 },
        { min: 32334, max: 40467, rate: 0.3 },
        { min: 40468, max: Infinity, rate: 0.35 }
    ];

    const nhifRate = 0.01;
    const nssfRate = 0.06;

    const grossSalary = basicSalary + benefits;

    const nhifDeduction = basicSalary * nhifRate;

    const nssfDeduction = basicSalary * nssfRate;

    const taxableIncome = grossSalary - nhifDeduction - nssfDeduction;

    let tax = 0;
    for (let bracket of TaxBrackets) {
        if (taxableIncome > bracket.min) {
            const taxableInThisBracket = Math.min(bracket.max - bracket.min, taxableIncome - bracket.min + 1);
            tax += taxableInThisBracket * bracket.rate;
        } else {
            break;
        }
    }

    const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;

    const results = {
        grossSalary: grossSalary,
        nhifDeduction: nhifDeduction,
        nssfDeduction: nssfDeduction,
        tax: tax,
        netSalary: netSalary
    };

    return results;
}


const basicSalary = 60000; 
const benefits = 10000;   
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
console.log(`NHIF Deduction: ${salaryDetails.nhifDeduction}`);
console.log(`NSSF Deduction: ${salaryDetails.nssfDeduction}`);
console.log(`Tax (PAYE): ${salaryDetails.tax}`);
console.log(`Net Salary: ${salaryDetails.netSalary}`);