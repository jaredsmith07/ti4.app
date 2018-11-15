// STRATEGY CARDS
// ================================================================================



// Variables
// --------------------------------------------------------------------------------
let strategies = [];



// Functions
// --------------------------------------------------------------------------------
const createStrategy = (number, title) => { // create new strategy
    strategies.push(
        {
            number: number,
            title:  title,
            picked: false,
            played: false
        }
    );
};

// Build strategy objects
createStrategy(1, "leadership");
createStrategy(2, "diplomacy");
createStrategy(3, "politics");
createStrategy(4, "construction");
createStrategy(5, "trade");
createStrategy(6, "warfare");
createStrategy(7, "technology");
createStrategy(8, "imperial");
log(strategies);

const createStrategyMarkup = () => { // create strategy section markup

    for (let i = 0; i < strategies.length; i++) {

        const strategy = strategies[i];

        // create markup for each strategy
        let strategyHTML = `
            <div class="strategy strategy__${strategy.title}">
                <h3>${strategy.title}</h3>
                <div class="strategy__player-select">
                </div>
            </div>
        `;
        $('.strategies .module__body').append(strategyHTML);

        // create player select fields for each strategy
        for (let j = 0; j < players.length; j++) {
            const player = players[j];
            let playerSelectHTML = `
                <div class="field-row">
                    <input type="checkbox" id="strat-${strategy.number}-player-${player.id}" name="player-${player.id}">
                    <label for="strat-${strategy.number}-player-${player.id}">${player.name}</label>
                </div>
            `;
            $(".strategy__" + strategy.title + " .strategy__player-select").append(playerSelectHTML);
        }
    }
};
createStrategyMarkup();

// mark a strategy as selected
for (let i = 0; i < strategies.length; i++) {
    const strategy = strategies[i];
    let strategyDiv = $('.strategy__' + strategy.title);
    $('strategyDiv').on('change', function(event){
        log('change detected');
    });
    // for (let j = 0; j < players.length; j++) {
    //     const player = players[j];
        
    //     // $("#strat-" + strategy.number + "-player-" + player.id).on('change', function() {
    //     //     log("strategy picked");
    //     // });
    // }
}