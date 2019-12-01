const fuelCalculation = (mass) => {
    return Math.max(Math.floor(mass / 3) - 2, 0);
};

const fuelRecursive = (fuel) => {
    const thisFuel = fuelCalculation(fuel);
    return thisFuel + (thisFuel > 0 ? fuelRecursive(thisFuel) : 0);
};

const getModuleArray = (input) => {
    return input.trim()
        .split('\n')
        .map(module => parseInt(module, 10));
};

module.exports = {
    getModuleArray,
    fuelCalculation,
    fuelRecursive
};
