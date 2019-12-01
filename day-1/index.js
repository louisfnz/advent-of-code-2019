const fs = require('fs-extra');

const day1 = async () => {
    const input = await fs.readFile('input.txt', 'utf-8');
    console.log(input);
};

day1();



