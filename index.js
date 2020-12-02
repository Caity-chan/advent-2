const fs = require('fs');
days = 2;
i = 0;
while (i < days) {
    i += 1;
    const day = fs.readdirSync(`./day-${i}/`);
    for (const part of day) {
        if (part.includes("js")) {
            require(`./day-${i}/${part}`);
        }
    }
}