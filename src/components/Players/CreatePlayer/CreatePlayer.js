import React, { Component } from 'react';

let chosenRace = '';
let chosenColor = '';

// document.querySelectorAll("input[value=something]");

class CreatePlayer extends Component {

    state = {
        createPlayerRace: '',
        createPlayerColor: '',
        createPlayerName: ''
    };

    handleRaceChange = (e) => {
        this.setState({ createPlayerRace: e.target.value })
        chosenRace = e.target;
    }

    handleColorChange = (e) => {
        this.setState({ createPlayerColor: e.target.value })     
        chosenColor = e.target;
    }

    handleNameChange = (e) => {
        this.setState({ createPlayerName: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(
            this.state.createPlayerRace,
            this.state.createPlayerColor,
            this.state.createPlayerName
        );
        chosenRace.setAttribute('disabled', true);
        chosenRace.checked = false;
        chosenColor.setAttribute('disabled', true)
        chosenColor.checked = false;
    }

    render() {
        return (
            <form className="create-player card" onSubmit={this.handleSubmit}>
    
                <div className="flex-row">
    
                    <div className="create-player__race form__field" onChange={this.handleRaceChange}>
                        <div className="flex-row">
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-arb" name="create-player-race" value="The Arborec"/>
                                <label htmlFor="create-player-race-arb">
                                    <img src={"/images/races-thumb/thearborec.jpg"} alt="The Arborec"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-bar" name="create-player-race" value="The Barony of Letnev"/>
                                <label htmlFor="create-player-race-bar">
                                    <img src={"/images/races-thumb/thebaronyofletnev.jpg"} alt="The Barony of Letnev"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-cla" name="create-player-race" value="The Clan of Saar"/>
                                <label htmlFor="create-player-race-cla">
                                    <img src={"/images/races-thumb/theclanofsaar.jpg"} alt="The Clan of Saar"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-emb" name="create-player-race" value="The Embers of Muaat"/>
                                <label htmlFor="create-player-race-emb">
                                    <img src={"/images/races-thumb/theembersofmuaat.jpg"} alt="The Embers of Muaat"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-emi" name="create-player-race" value="The Emirates of Hacan"/>
                                <label htmlFor="create-player-race-emi">
                                    <img src={"/images/races-thumb/theemiratesofhacan.jpg"} alt="The Emirates of Hacan"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-fed" name="create-player-race" value="The Federation of Sol"/>
                                <label htmlFor="create-player-race-fed">
                                    <img src={"/images/races-thumb/thefederationofsol.jpg"} alt="The Federation of Sol"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-gho" name="create-player-race" value="The Ghosts of Creuss"/>
                                <label htmlFor="create-player-race-gho">
                                    <img src={"/images/races-thumb/theghostsofcreuss.jpg"} alt="The Ghosts of Creuss"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-l1z" name="create-player-race" value="The L1Z1X Mindnet"/>
                                <label htmlFor="create-player-race-l1z">
                                    <img src={"/images/races-thumb/thel1z1xmindnet.jpg"} alt="The L1Z1X Mindnet"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-men" name="create-player-race" value="The Mentak Coalition"/>
                                <label htmlFor="create-player-race-men">
                                    <img src={"/images/races-thumb/thementakcoalition.jpg"} alt="The Mentak Coalition"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-naa" name="create-player-race" value="The Naalu Collective"/>
                                <label htmlFor="create-player-race-naa">
                                    <img src={"/images/races-thumb/thenaalucollective.jpg"} alt="The Naalu Collective"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-nek" name="create-player-race" value="The Nekro Virus"/>
                                <label htmlFor="create-player-race-nek">
                                    <img src={"/images/races-thumb/thenekrovirus.jpg"} alt="The Nekro Virus"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-sar" name="create-player-race" value="The Sardakk N'orr"/>
                                <label htmlFor="create-player-race-sar">
                                    <img src={"/images/races-thumb/thesardakknorr.jpg"} alt="The Sardakk N'orr"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-uni" name="create-player-race" value="The Universities of Jol-nar"/>
                                <label htmlFor="create-player-race-uni">
                                    <img src={"/images/races-thumb/theuniversitiesofjolnar.jpg"} alt="The Universities of Jol-nar"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-win" name="create-player-race" value="The Winnu"/>
                                <label htmlFor="create-player-race-win">
                                    <img src={"/images/races-thumb/thewinnu.jpg"} alt="The Winnu"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-xxc" name="create-player-race" value="The Xxcha Kingdom"/>
                                <label htmlFor="create-player-race-xxc">
                                    <img src={"/images/races-thumb/thexxchakingdom.jpg"} alt="The Xxcha Kingdom"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-yin" name="create-player-race" value="The Yin Brotherhood"/>
                                <label htmlFor="create-player-race-yin">
                                    <img src={"/images/races-thumb/theyinbrotherhood.jpg"} alt="The Yin Brotherhood"/>
                                </label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-race-yss" name="create-player-race" value="The Yssaril Tribes"/>
                                <label htmlFor="create-player-race-yss">
                                    <img src={"/images/races-thumb/theyssariltribes.jpg"} alt="The Yssaril Tribes"/>
                                </label>
                            </div>
                        </div>
                    </div>
    
                    <div className="create-player__color form__field" onChange={this.handleColorChange}>
                        <div className="flex-row">
                            <div className="form__field-option">
                                <input type="radio" id="create-player-color-black" name="create-player-color" value="black" />
                                <label htmlFor="create-player-color-black"><span>Black</span></label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-color-blue" name="create-player-color" value="blue" />
                                <label htmlFor="create-player-color-blue"><span>Blue</span></label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-color-purple" name="create-player-color" value="purple" />
                                <label htmlFor="create-player-color-purple"><span>Purple</span></label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-color-green" name="create-player-color" value="green" />
                                <label htmlFor="create-player-color-green"><span>Green</span></label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-color-yellow" name="create-player-color" value="yellow" />
                                <label htmlFor="create-player-color-yellow"><span>Yellow</span></label>
                            </div>
                            <div className="form__field-option">
                                <input type="radio" id="create-player-color-red" name="create-player-color" value="red" />
                                <label htmlFor="create-player-color-red"><span>Red</span></label>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form__field-group">
    
                        <div className="create-player__name form__field">
                            {/* <label htmlFor="create-player-name">Player Name</label> */}
                            <input id="create-player-name" type="text" placeholder="Enter player name" value={this.state.createPlayerName} onChange={this.handleNameChange} />
                        </div>
    
                        <div className="form__field">
                            <button type="submit" className="primary-button button-lg">Create player</button>
                        </div>
    
                    </div>
    
                </div>
                
            </form>
        );
    }
}

export default CreatePlayer;