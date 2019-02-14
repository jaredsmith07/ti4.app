import React, { Component } from 'react';
import CreatePlayerRace from './CreatePlayerRace/CreatePlayerRace';

// let pickedRace = '';
// let pickedColor = '';

class CreatePlayer extends Component {

    state = {
        createPlayerRace: '',
        createPlayerColor: '',
        createPlayerName: ''
    };

    handleRaceChange = (e) => {
        this.setState({ createPlayerRace: e.target.getAttribute('datarace') })
    }

    handleColorChange = (e) => {
        this.setState({ createPlayerColor: e.target.getAttribute('datacolor') })
    }

    handleNameChange = (e) => {
        this.setState({ createPlayerName: e.target.value })
    }

    handleSubmit = (e) => {

        e.preventDefault();
        
        this.props.addPlayer(
            this.props.races[this.state.createPlayerRace].name,
            this.state.createPlayerRace,
            this.props.colors[this.state.createPlayerColor].name,
            this.state.createPlayerColor,
            this.state.createPlayerName
        );
        
        this.props.pickedRace(this.state.createPlayerRace, true)
        this.props.pickedColor(this.state.createPlayerColor, true)

        e.target.reset();
        this.setState({ createPlayerName: ''});
    }

    render() {
        
        return (
            <form className="create-player card" onSubmit={this.handleSubmit}>
    
                <div className="create-player__thumbnails form__field-group">
    
                    <div className="create-player__race form__field" onChange={this.handleRaceChange}>
                        <div className="flex-row">
                            {this.props.races.map( (race, index) => (
                                <CreatePlayerRace
                                    key={index}
                                    id={race.id}
                                    name={race.name}
                                    pickedRace={race.picked}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="create-player__color form__field" onChange={this.handleColorChange}>
                        <div className="flex-row">
                            {this.props.colors.map( (color, index) => (
                                <div className="form__field-option">
                                    <input type="radio" id={"create-player-color-" + color.name} name="create-player-color" value={ color.name } datacolor={color.id} disabled={color.picked}/>
                                    <label htmlFor={"create-player-color-" + color.name}><span>{ color.name }</span></label>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                    
                <div className="create-player__fields form__field-group">

                    <div className="create-player__name form__field">
                        {/* <label htmlFor="create-player-name">Player Name</label> */}
                        <input id="create-player-name" type="text" placeholder="Enter player name" value={this.state.createPlayerName} onChange={this.handleNameChange} />
                    </div>

                    <div className="form__field">
                        <button type="submit" className="primary-button button-lg">Create player</button>
                    </div>

                </div>
    
                
                
            </form>
        );
    }
}

export default CreatePlayer;