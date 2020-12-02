const fs = require('fs');
const expfile = fs.readFileSync('./day-1/expenses.txt');
const exparray = expfile.toString().split("\n");
sumarray = [];
for (const numa of exparray) {
    for (const numb of exparray) {
        boop = parseInt(numa) + parseInt(numb);
        if (boop === 2020) {
            result = numa * numb;
            if (!sumarray.includes(result)) {
                sumarray.push(result);
                resultnums = [numa, numb];
            }
        }
    }
}
console.log("Day 1, part a: " + sumarray + " => " + resultnums);