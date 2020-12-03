const fs = require('fs');
const passfile = fs.readFileSync('./day-3/land.txt');
const landarray = passfile.toString().split("\n");
index = 0;
trees = 0;
for (const chunk of landarray) {
    a = 0;
    chunks = chunk;
    while (a < 500) {
        chunks = chunks + chunk;
        a += 1;
    }
    units = chunks.split("");
    pos = index * 3;
    if (units[pos] === "#") {
        trees += 1;
    }
    index += 1;
}
console.log("Day 3, part a: " + trees);

//3
//6 2
//9 3
//12 4
//15 5