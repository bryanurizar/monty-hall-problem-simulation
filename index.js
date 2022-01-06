// A simulation of the Monty Hall Problem

// Randomly sets a 1 behind a door
function doorConfig() {
    const doors = [0, 0, 0];
    doors[Math.floor(Math.random() * 3)] = 1;
    return doors;
}

function montyHallProblemSimulation(attempts) {
    const doors = doorConfig();
    let keepDoorCorrectCount = 0;
    let switchDoorCorrectCount = 0;

    for (
        let randomlyChosenDoorIdx = Math.floor(Math.random() * 3), i = 0;
        i < attempts;
        i++
    ) {
        // The initial choice determines the probability of selecting the correct door
        doors[randomlyChosenDoorIdx] === 1
            ? keepDoorCorrectCount++
            : keepDoorCorrectCount;

        // If the initial choice is a 0 or 1 then switching produces 1 or 0 respectively as the host always opens an incorrect door
        doors[randomlyChosenDoorIdx] === 1
            ? switchDoorCorrectCount
            : switchDoorCorrectCount++;

        randomlyChosenDoorIdx = Math.floor(Math.random() * 3);
    }
    return [
        Math.round((keepDoorCorrectCount / attempts) * 100) + '%',
        Math.round((switchDoorCorrectCount / attempts) * 100) + '%',
    ];
}

console.log(montyHallProblemSimulation(1_000_000)); // => [33%, 67%]
