import React, { Component } from 'react';
// import {
//     BrowserRouter,
//     Route,
//     Redirect
// } from 'react-router-dom';

import Navigation from './../Navigation/Navigation';
import RulesContainer from './../Rules/RulesContainer';

import PlayerContainer from './../Players/PlayerContainer';
import CreatePlayer from './../Players/CreatePlayer/CreatePlayer';

import ScoreContainer from './../Score/ScoreContainer';

import RoundContainer from './../Round/RoundContainer';

import AgendaContainer from './../Agenda/AgendaContainer';

// import SettingsContainer from './../Settings/SettingsContainer';



const createId = () => {
    return Math.random().toString(16).slice(-6); // for random id, aplha-numeric
};

class Race {
    constructor( name, portrait, thumbnail ) {
        this.id = createId();
        this.name = name;
        this.race = portrait;
        this.color = thumbnail;
    }
}
new Race('The Embers of Muaat', 'tbd', 'tbd');


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            players: [
                {
                    id: createId(),
                    key: createId(),
                    name: 'Aaron',
                    race: 'The Embers of Muaat',
                    raceId: '3',
                    color: 'yellow',
                    colorId: '5',
                    score: 0
                },
                {
                    id: createId(),
                    key: createId(),
                    name: 'Adam',
                    race: 'The Emirates of Hacan',
                    raceId: '4',
                    color: 'red',
                    colorId: '4',
                    score: 0
                },
                {
                    id: createId(),
                    key: createId(),
                    name: 'Jordan',
                    race: 'The Yssaril Tribes',
                    raceId: '16',
                    color: 'blue',
                    colorId: '1',
                    score: 0
                }
            ],
            strategies: [
                {
                    id: 1,
                    name: 'Leadership',
                    primary: '<li>Gain 3 command tokens.</li><li>Spend any amount of influence to gain 1 command token for every 3 influence spent.</li>',
                    secondary: '<li>Spend any amount of influence to gain 1 command token for every 3 influence spent.</li>',
                    tip: 'A player might choose this card to gain more command tokens, enabling him to perform more actions during the action phase.'
                },
                {
                    id: 2,
                    name: 'Diplomacy',
                    primary: '<li>Choose 1 system other than the Mecatol Rex system that contains a plant you control; Each other player places a command token from his reinforcements in the chosen system. Then ready each exhausted planet you control in that system.</li>',
                    secondary: '<li>Spend 1 token from your strategy pool to ready up to 2 exhausted planets.</li>',
                    tip: 'A player might choose this card if he feels threatened, to prevent other players from attacking his system.'
                },
                {
                    id: 3,
                    name: 'Politics',
                    primary: '<li>Choose a player other than the speaker. That player gains the speaker token.</li><li>Draw 2 action cards.</li><li>Look at the top 2 cards of the agenda deck. Place each card on the top or bottom of the deck in any order.</li>',
                    secondary: '<li>Spend 1 token from your strategy pool to draw 2 action cards.</li>',
                    tip: 'A player might choose this card to draw action cards, increasing the variety of abilities that are available to him.'
                },
                {
                    id: 4,
                    name: 'Construction',
                    primary: '<li>Place 1 PDS or 1 space dock on a planet you control.</li><li>Place 1 PDS on a planet you control.</li>',
                    secondary: '<li>Place 1 token from your strategy pool in any system; you may palce either 1 space dock or 1 PDS on a planet you control in that system.</li>',
                    tip: 'A player might choose this card to produce planetary structures, such as space docks, and PDF units.'
                },
                {
                    id: 5,
                    name: 'Trade',
                    primary: '<li>Gain 3 trade goods.</li><li>Replenish commodities.</li><li>Choose any number of other players. Those players use the secondary ability.</li>',
                    secondary: '<li>Spend 1 token from your strategy pool to replenish commodities.</li>',
                    tip: 'A player might choose this card to gain trade goods and commodities, which he could use to produce additional units or trade to other players.'
                },
                {
                    id: 6,
                    name: 'Warfare',
                    primary: '<li>Remove 1 of your command tokens from the game board; then, gain 1 command token.</li><li>Redistribute any number of the command tokens on your command sheet.</li>',
                    secondary: '<li>Spend 1 token from your strategy pool to use the PRODUCTION ability of 1 of your space docks in your home system.</li>',
                    tip: 'A player might choose this card to allow some of his ships to move twive, or to build a unit and move it during the same game round.'
                },
                {
                    id: 7,
                    name: 'Technology',
                    primary: '<li>Research 1 technology.</li><li>Spend 6 resources to research 1 technology.</li>',
                    secondary: '<li>Spend 1 token from your strategy pool and 4 resources to research 1 technology.</li>',
                    tip: 'A player might choose this card to research a new technolgoy that would grant him a new ability or unit upgrade.'
                },
                {
                    id: 8,
                    name: 'Imperial',
                    primary: '<li>Immediately score 1 public objective if you fulfill its requirements.</li><li>Gain 1 victory card if you control Mecatol Rex; otherwise, draw 1 secret objective.</li>',
                    secondary: '<li>Spend 1 token from your strategy pool to draw 1 secret objective.</li>',
                    tip: 'A player might choose this card to draw an additional secret objective, granting him additional routes to victory.'
                },
            ],
            races: [
                {
                    id: 0,
                    name: 'The Arborec',
                    picked: false,
                },
                {
                    id: 1,
                    name: 'The Barony of Letnev',
                    picked: false,
                },
                {
                    id: 2,
                    name: 'The Clan of Saar',
                    picked: false,
                },
                {
                    id: 3,
                    name: 'The Embers of Muaat',
                    picked: true,
                },
                {
                    id: 4,
                    name: 'The Emirates of Hacan',
                    picked: true,
                },
                {
                    id: 5,
                    name: 'The Federation of Sol',
                    picked: false,
                },
                {
                    id: 6,
                    name: 'The Ghosts of Creuss',
                    picked: false,
                },
                {
                    id: 7,
                    name: 'The L1Z1X Mindnet',
                    picked: false,
                },
                {
                    id: 8,
                    name: 'The Mentak Coalition',
                    picked: false,
                },
                {
                    id: 9,
                    name: 'The Naalu Collective',
                    picked: false,
                },
                {
                    id: 10,
                    name: 'The Nekro Virus',
                    picked: false,
                },
                {
                    id: 11,
                    name: "The Sardakk N'orr",
                    picked: false,
                },
                {
                    id: 12,
                    name: 'The Universities of Jol-nar',
                    picked: false,
                },
                {
                    id: 13,
                    name: 'The Winnu',
                    picked: false,
                },
                {
                    id: 14,
                    name: 'The Xxcha Kingdom',
                    picked: false,
                },
                {
                    id: 15,
                    name: 'The Yin Brotherhood',
                    picked: false,
                },
                {
                    id: 16,
                    name: 'The Yssaril Tribes',
                    picked: true,
                },
            ],
            colors: [
                {
                    id: 0,
                    name: 'black',
                    picked: false
                },
                {
                    id: 1,
                    name: 'blue',
                    picked: false
                },
                {
                    id: 2,
                    name: 'green',
                    picked: false
                },
                {
                    id: 3,
                    name: 'purple',
                    picked: false
                },
                {
                    id: 4,
                    name: 'red',
                    picked: false
                },
                {
                    id: 5,
                    name: 'yellow',
                    picked: false
                }
            ],
            // showCreatePlayerModal: false
        };
    }

    handleAddPlayer = (race, raceId, color, colorId, name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    id: createId(),
                    key: createId(),
                    name,
                    race,
                    raceId,
                    color,
                    colorId,
                    score: 0
                }
            ]
        });
    }

    handleRemovePlayer = (id) => {
        
        let pickedColor = this.state.players.find( c => c.id === id ).colorId;
        let pickedRace = this.state.players.find( d => d.id === id ).raceId;

        // Set color object to unpicked
        this.setState( (prevState) => {
            return {
                ...prevState.colors[pickedColor].picked = false,
                ...prevState.races[pickedRace].picked = false,
                players: prevState.players.filter( p => p.id !== id ),
            }
        });
    }

    handleScoreChange = (index, delta) => {
        this.setState( (prevState) => {
            return {
                score: prevState.players[index].score += delta
            }
        });
    }

    handlePickedRace = (id, state) => {
        this.setState( (prevState) => {
            return {
                ...prevState.races[id].picked = state
            }
        });
    }

    handlePickedColor = (id, state) => {
        this.setState( (prevState) => {
            return {
                ...prevState.colors[id].picked = state
            }
        });
    }

    handleShowModal = (modal, state) => {
        console.log(modal, state);
        const modalContainer = document.querySelector('.modal-container');
        const selectedModal = document.querySelector('.modal__' + modal);
        const modals = document.querySelectorAll('.modal');
        if ( state === true ) {
            modalContainer.classList.add('modal--show');
            selectedModal.classList.add('modal--show');
        } else {
            modalContainer.classList.remove('modal--show');
            modals.forEach(modal => {
                modal.classList.remove('modal--show');
            });
        }
    }

	render() {
		return (
            <div className="app">
                <Navigation />
                <div id="view-container" className="view-container">

                    <div className="view view__players">
                        {/* <ScoreContainer /> */}
                        <h1>Setup</h1>
                        <PlayerContainer
                            players={this.state.players}
                            races={this.state.races}
                            pickedRace={this.handlePickedRace}
                            colors={this.state.colors}
                            pickedColor={this.handlePickedColor}
                            changeScore={this.handleScoreChange}
                            addPlayer={this.handleAddPlayer}
                            removePlayer={this.handleRemovePlayer} 
                            handleModal={this.handleShowModal}
                        />
                    </div>

                    <div className="view view__score">
                        <h1>Score</h1>
                        <ScoreContainer
                            players={this.state.players}
                            changeScore={this.handleScoreChange}
                        />
                    </div>

                    <div className="view view__game">
                        <h1>Round</h1>
                        <RoundContainer
                            players={this.state.players}
                            strategies={this.state.strategies}
                        />
                    </div>

                    <div className="view view__agenda">
                        <h1>Agenda</h1>
                        <AgendaContainer />
                    </div>

                    <div className="view view__rules">
                        <h1>Rules</h1>
                        <RulesContainer />
                    </div>

                    {/* <div className="view view__settings">
                        <h1>Settings</h1>
                        <SettingsContainer />
                    </div> */}

                </div>
                <div className="modal-container">
                    <div className="modal modal__create-player players__create-player card">
                        <button className="modal__close-btn" onClick={ () => this.handleShowModal('create-player', false) }>
                            <svg xlinkHref="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                        </button>
                        <h2>Create player</h2>
                        <CreatePlayer
                            addPlayer={this.handleAddPlayer}
                            races={this.state.races}
                            pickedRace={this.handlePickedRace}
                            colors={this.state.colors}
                            pickedColor={this.handlePickedColor}
                            handleModal={this.handleShowModal}
                        />
                    </div>
                </div>
            </div>
		);
	}
}

export default App;