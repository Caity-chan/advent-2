
const fs = require('fs');
const passfile = fs.readFileSync('./passwords.txt');
const passarray = passfile.toString().split("\n");
index = 0;
indexb = 0;
async function testb() {
    for (const passwordarray of passarray) {
        count = 0;
        placeholder = await passwordarray.split(" ");
        reqchar = placeholder[1].replace(/:/g, "");
        policy = placeholder[0].split("-");
        pass = placeholder[2].split("");
        indexa = 0;
        polica = parseInt(policy[0]);
        policb = parseInt(policy[1]);
        if (pass[polica-1] === reqchar) {
            count += 1;
        }
        if (pass[policb-1] === reqchar) {
            count += 1;
        }
        if (count === 1) {
            indexb += 1;
        }
        index += 1;
    }
    console.log("Part b:" + indexb);
}
testb();