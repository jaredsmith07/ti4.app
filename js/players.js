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
createPlayer("Aaron", "The Universities of Jol-Nar", "purple");
createPlayer("Jordan P.", "The Naalu Collective", "black");
createPlayer("Adam", "The Clan of Saar", "yellow");
createPlayer("Trevor", "The Federation of Sol", "blue");
createPlayer("Jordan M.", "The Nekro Virus", "red");
createPlayer("Jared", "The Arborec", "green");
log(players);

// add player count to body
const countPlayers = () => {
    $('body').addClass("player-count-" + players.length);
}
countPlayers();