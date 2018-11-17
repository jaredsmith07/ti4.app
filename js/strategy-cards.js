// STRATEGY CARDS
// ================================================================================
$('.round').hide();


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
const watchStrategies = () => {
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
}
watchStrategies();

// create rounds markup
$('#end-round').prop("disabled", true);
const createRoundMarkup = () => { 
    let turnNumber = 1;

    for (let i = 0; i < strategies.length; i++) {

        let strategy = strategies[i];

        // create markup for each strategy if it was picked
        if ( strategy.picked !== false ) {
            let playerId = strategy.picked;

            for (let j = 0; j < players.length; j++) {
                let player = players[j];
                let playerRace = player.race.replace(/\s/g, '').toLowerCase();
                if ( player.id == playerId ) {
                    let roundHTML = `
                    <div class="player player__${player.id} player--${player.color} player--${playerRace}" >
                        <div class="player__race-image">

                        </div>
                        <div class="player__turn-info">
                            <p class="player__turn-number">${turnNumber}</p>
                            <h3>${player.name}</h3>
                            <div class="field-row player__strat-button">
                                <input type="checkbox" id="used-strat-${player.id}" name="used-strat"></input>
                                <label for="used-strat-${player.id}" class="${strategy.title}">${strategy.title}</label>
                            </div>
                            <div class="field-row player__pass-button">
                                <input type="checkbox" id="pass-${player.id}" name="pass" class="disabled"></input>
                                <label for="pass-${player.id}">Pass</label>
                            </div>
                        </div>
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

    $('.round .module__body').empty();

    $('.strategies').slideUp();
    createRoundMarkup();
    $('.round').show();
    watchTurns();
});

// count passed turns
const countPassedTurns = () => {
    passedTurns = 0;
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let turnDiv = $('.player__' + player.id);
        if ( $(turnDiv).hasClass('passed') ) {
            passedTurns++;
        }
    }
    return passedTurns;
}

// mark a player as passed
// check how many players have passed
const watchTurns = () => {
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
        let turnDiv = $('.player__' + player.id);

        $(turnDiv).on('change', function(event){

            if ( $(event.target).attr('name') == 'used-strat' ) {

                $(turnDiv).toggleClass('used-strat');
                log( '.player__' + player.id + ' .player__pass-button input' );
                $('.player__' + player.id + ' .player__pass-button input').toggleClass('disabled');

            } else if ( $(event.target).attr('name') == 'pass' ) {

                $(turnDiv).toggleClass('passed');

                countPassedTurns();

                if ( passedTurns == players.length ) {
                    $('#end-round').prop("disabled", false);
                } else {
                    $('#end-round').prop("disabled", true);
                }

            }
        });
    }
}

// on end round
$('#end-round').on('click', function() {
    for (let i = 0; i < strategies.length; i++) {
        const strategy = strategies[i];
        strategy.picked = false;
    }
    
    $('.strategies .module__body').empty();
    
    $('.round').slideUp();
    createStrategyMarkup();
    $('.strategies').show();
    watchStrategies();

});

