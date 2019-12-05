const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const temp = input.trim().split('-');
const range_from = parseInt(temp[0], 10);
const range_to = parseInt(temp[1], 10);

let count = 0;

for (let attempt = range_from; attempt <= range_to; attempt++) {
    const digits = attempt.toString().split('').map(d => parseInt(d, 10));
    let pass = true;
    let has_double = false;

    for (let d = 1; d < digits.length; d++) {
        if (digits[d] < digits[d-1]) {
            pass = false;
            break;
        }
        if (digits[d] === digits[d-1]) has_double = true;
    }

    if (pass && has_double) count++;
}

console.log(count);