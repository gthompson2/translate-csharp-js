console.log("My Enemies List!");
console.log("----------------");

const main = () => {
    const enemies = GetEnemies();

    for (const enemy of enemies) {
        if (enemy.isReallyHated) {
            console.log(`${enemy.firstName} ${enemy.lastName} (Really, really dislike!)`);
        } else {
            console.log(`${enemy.firstName} ${enemy.lastName}`);
        }
    }
}

const GetEnemies = () => {
    const enemies = [
        {
            firstName: "Joshua",
            lastName: "Flowers",
            Offenses: [
                "Being a jerk to me in elementary school",
                "Not being nice to me in elementary school"
            ],
            isReallyHated: true
        },
        {
            firstName: "Darth",
            lastName: "Vader",
            Offenses: [
                "Cut off Luke's hand",
                "Murdered all those kids",
                "Unkind management practices"
            ],
            isReallyHated: false
        },
        {
            firstName: "Betty",
            lastName: "Rudelady",
            Offenses: [
                "Phone calls in the theater",
                "Phone calls on the bus",
                "Phone calls in line at the grocery store",
                "Poor conversationalist"
            ],
            isReallyHated: true
        },
        {
            firstName: "Leon",
            lastName: "Peck",
            Offenses: [
                "Keeps giving me a hotplate"
            ],
            isReallyHated: false
        }

    ];

    return enemies;
}

main();