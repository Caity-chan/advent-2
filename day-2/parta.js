const fs = require('fs');
const passfile = fs.readFileSync('./day-2/passwords.txt');
const passarray = passfile.toString().split("\n");
indexab = 0;
async function test() {
    for (const passwordarray of passarray) {
        placeholder = await passwordarray.split(" ");
        reqchar = placeholder[1].replace(/:/g, "");
        policy = placeholder[0].split("-");
        pass = placeholder[2].split("");
        indexba = 0;
        for (const char of pass) {
            if (char === reqchar) {
                indexba += 1;
            }
        }
        if (indexba >= parseInt(policy[0])) {
            if (indexba <= parseInt(policy[1])) {
                indexab += 1;
            }
        }
    }
    console.log("Day 2, part a:" + indexab);
}
test();
