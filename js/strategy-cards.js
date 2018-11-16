// STRATEGY CARDS
// ================================================================================



// Variables
// --------------------------------------------------------------------------------
let strategies = [];
let pickedStrategies = 0;


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
                    <input type="checkbox" id="strat-${strategy.number}-player-${player.id}" name="player-${player.id}" data-player="${player.id}" data-strat="${strategy.number}">
                    <label for="strat-${strategy.number}-player-${player.id}">${player.name}</label>
                </div>
            `;
            $(".strategy__" + strategy.title + " .strategy__player-select").append(playerSelectHTML);
        }
    }
};
createStrategyMarkup();

// count picked strategies
const countPickedStrategies = () => {
    pickedStrategies = 0;
    for (let i = 0; i < strategies.length; i++) {
        const strategy = strategies[i];
        let strategyDiv = $('.strategy__' + strategy.title);
        if ( $(strategyDiv).hasClass('picked') ) {
            pickedStrategies++;
        }
    }
    return pickedStrategies;
}

// mark a strategy as selected
// check how many strategies have been picked
$('#start-round').prop("disabled", true);
for (let i = 0; i < strategies.length; i++) {
    const strategy = strategies[i];
    let strategyDiv = $('.strategy__' + strategy.title);

    $(strategyDiv).on('change', function(event){

        $(strategyDiv).toggleClass('picked');

        countPickedStrategies();

        if ( pickedStrategies == players.length ) {
            $('#start-round').prop("disabled", false);
        } else {
            $('#start-round').prop("disabled", true);
        }

    });
}

// create rounds markup
$('#end-round').prop("disabled", true);
let turnNumber = 1;
const createRoundMarkup = () => { 

    for (let i = 0; i < strategies.length; i++) {

        let strategy = strategies[i];

        // create markup for each strategy if it was picked
        if ( strategy.picked !== false ) {
            let playerId = strategy.picked;

            for (let j = 0; j < players.length; j++) {
                let player = players[j];
                if ( player.id == playerId ) {
                    let roundHTML = `
                    <div class="player player--${player.color}">
                        <p class="player__turn">${turnNumber}</p>
                        <h3>${player.name}</h3>
                        <p>${strategy.title}</p>
                    </div>
                    `;
                    $('.round .module__body').append(roundHTML);
                } 
            } 
            turnNumber++;       
        }
    }
};

// on start round
//      - store picked strategies
//      - store player strategy picks
//      - hide strategy selection view
//      - build round view
$('#start-round').on('click', function() {
    let pickedCheckboxes = [];

    checkboxes = $('.strategies input');
    for (let j = 0; j < checkboxes.length; j++) {
        let checkbox = checkboxes[j];
        if ( $(checkbox).is(':checked') ) {
            pickedCheckboxes.push(checkbox);
        }
    }

    for (let k = 0; k < pickedCheckboxes.length; k++) {
        let pickedCheckbox = pickedCheckboxes[k];
        for (let i = 0; i < strategies.length; i++) {
            let strategy = strategies[i];
            if ( $(pickedCheckbox).attr('data-strat') == strategy.number ) {
                strategy.picked = $(pickedCheckbox).attr('data-player');
            }
        }
        
    }

    $('strategies').hide();
    createRoundMarkup();
});


// on end round
$('#end-round').on('click', function() {
    for (let i = 0; i < strategies.length; i++) {
        const strategy = strategies[i];
        strategy.picked = false;
    }
});

