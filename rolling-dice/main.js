console.log("Let's roll some dice, baby!")
console.log("---------------------------")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const main = () => {
    for (let i = 0; i < 10; i++) {
        const die1 = Roll();
        const die2 = Roll();

        let message = `${dieToString(die1)} + ${dieToString(die2)} === ${die1 + die2}`;
        if (die1 === die2) {
            message += " DOUBLES!";
        }

        console.log(message);
    }
}

const Roll = () => {
    const dieValue = getRandomInt(1, 6);
    return dieValue
}

function dieToString(die) {
    const dieString = "Unknown"
    switch (die) {
        case 1:
            dieString = "\u2680";
            break;
        case 2:
            dieString = "\u2681";
            break;
        case 3:
            dieString = "\u2682";
            break;
        case 4:
            dieString = "\u2683";
            break;
        case 5:
            dieString = "\u2684";
            break;
        case 6:
            dieString = "\u2685";
            break;
    }

    return dieString;
}

main();