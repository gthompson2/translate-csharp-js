console.log("Do you believe in magic?");
console.log("------------------------");

const main = () => {
    const allSpells = GetAllSpells();
    const goodBook = MakeGoodSpellBook(allSpells);
    const evilBook = MakeEvilSpellBook(allSpells);
    DisplaySpellBook(goodBook);
    console.log();
    DisplaySpellBook(evilBook);
}

// THE PROBLEM IS IN THE DISPLAY FUNCTION
const DisplaySpellBook = (book) => {
    console.log(book.title);
    for (const spell of book.spells) {
        console.log(spell.name);
    }

}

const MakeGoodSpellBook = () => {
    const allSpells = GetAllSpells();
    const goodBook = {
        title: "Good Book",
        spells: allSpells.filter((spell) => {
            if (spell.isEvil === false) {
                return spell
            }
        })
    };

    return goodBook;
}

const MakeEvilSpellBook = () => {
    const allSpells = GetAllSpells();
    const evilBook = {
        title: "Evil Book",
        spells: allSpells.filter((spell) => {
            if (spell.isEvil === true) {
                return spell
            }
        })
    };

    return evilBook;
}

const GetAllSpells = () => {
    const allSpells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ability to hear",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
    ]

    return allSpells;
}

main();