const fs = require('fs');
const passfile = fs.readFileSync('./passwords.txt');
const passarray = passfile.toString().split("\n");
indexb = 0;
async function test() {
    for (const passwordarray of passarray) {
        placeholder = await passwordarray.split(" ");
        reqchar = placeholder[1].replace(/:/g, "");
        policy = placeholder[0].split("-");
        pass = placeholder[2].split("");
        indexa = 0;
        for (const char of pass) {
            if (char === reqchar) {
                indexa += 1;
            }
        }
        if (indexa >= parseInt(policy[0])) {
            if (indexa <= parseInt(policy[1])) {
                indexb += 1;
            }
        }
    }
    console.log("Part a:" + indexb);
}
test();

const testb = require('./partb');