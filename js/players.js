// PLAYERS
// ================================================================================



// Variables
// --------------------------------------------------------------------------------
let players = [];



// Functions
// --------------------------------------------------------------------------------
const createPlayer = (name, race, color) => { // create new player
    players.push(
        {
            id:     createId(),
            name:   name,
            race:   race,
            color:  color,
            score:  0
        }
    );
};

const removePlayer = (id) => { // remove player
    // listUl.innerHTML = '';
    list.splice(id, 1);
    // outputList();
};

// Run
// --------------------------------------------------------------------------------
createPlayer("Aaron", "Universities of Jol-Nar", "purple");
createPlayer("Jordan P.", "Naalu Collective", "black");
createPlayer("Adam", "Clan of Saar"), "yellow";
createPlayer("Trevor", "Federation of Sol", "blue");
createPlayer("Jordan M.", "Nekro Virus", "red");
createPlayer("Jared", "Arborec", "green");
log(players);