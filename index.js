function doorConfig() {
    const doors = [0, 0, 0];
    doors[Math.floor(Math.random() * 3)] = 1;
    return doors;
}

function keepStrategy(attempts) {
    const doors = doorConfig();
    let doorProbability = 0;
    for (
        let chosenDoorsIdx = Math.floor(Math.random() * 3), i = 0;
        i < attempts;
        i++
    ) {
        doors[chosenDoorsIdx] === 1 ? doorProbability++ : doorProbability;
        chosenDoorsIdx = Math.floor(Math.random() * 3);
    }

    return Math.round((doorProbability / attempts) * 100) + '%';
}

function changeStrategy(attempts) {
    const doors = doorConfig();
    let doorProbability = 0;

    for (
        let chosenDoorsIdx = Math.floor(Math.random() * 3), i = 0;
        i < attempts;
        i++
    ) {
        doors[chosenDoorsIdx] === 1 ? doorProbability : doorProbability++;
        chosenDoorsIdx = Math.floor(Math.random() * 3);
    }
    return Math.round((doorProbability / attempts) * 100) + '%';
}

console.log('Keep Door Strategy: ' + keepStrategy(1_000_000));
console.log('Switch Door Strategy: ' + changeStrategy(1_000_000));
