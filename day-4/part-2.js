const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');
const temp = input.trim().split('-');
const range_from = parseInt(temp[0], 10);
const range_to = parseInt(temp[1], 10);

let count = 0;

for (let attempt = range_from; attempt <= range_to; attempt++) {
    const digits = attempt.toString().split('').map(d => parseInt(d, 10));
    let pass = true;
    let has_only_double = false;

    for (let d = 0; d < digits.length; d++) {
        if (d > 0 && digits[d] < digits[d-1]) {
            pass = false;
            break;
        }
        if (digits[d-1] !== digits[d] && digits[d] === digits[d+1] && digits[d] !== digits[d+2]) has_only_double = true;
    }

    if (pass && has_only_double) count++;
}



console.log('count', count);