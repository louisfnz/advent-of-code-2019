const fs = require('fs-extra');

const fuelCalculation = (mass) => {
    const fuel = Math.floor(mass / 3) - 2;
    return fuel < 0 ? 0 : fuel;
};

const getModuleArray = (input) => {
    return input.trim()
        .split('\n')
        .map(module => parseInt(module, 10));
};

const partOne = async () => {
    const input = await fs.readFile('input.txt', 'utf-8');

    const modules = getModuleArray(input);

    const total = modules
        .map(mass => fuelCalculation(mass))
        .reduce((a, b) => a + b, 0);

    console.log('Part one: ', total);
};

const partTwo = async () => {
    const input = await fs.readFile('input.txt', 'utf-8');

    const modules = getModuleArray(input);

    let total = 0;

    modules.forEach(mass => {
        let module_total = 0;
        let current = mass;

        while (true) {
            const fuel = fuelCalculation(current);
            module_total += fuel;
            if (fuel === 0) break;
            current = fuel;
        }

        total += module_total;
    });

    console.log('Part two: ', total);
};


partOne();
partTwo();
