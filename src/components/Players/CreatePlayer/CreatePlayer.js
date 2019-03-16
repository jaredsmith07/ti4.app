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

        this.props.handleModal('create-player', false);

        e.target.reset();
        this.setState({ createPlayerName: ''});
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
    
                <div className="create-player__thumbnails form__field-group">
    
                    <div className="create-player__race form__field" onChange={this.handleRaceChange}>
                        <div className="grid-row">
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
                        <div className="grid-row">
                            {this.props.colors.map( (color, index) => (
                                <div className="form__field-option">
                                    <input type="radio" id={"create-player-color-" + color.name} name="create-player-color" value={ color.name } datacolor={color.id} disabled={color.picked}/>
                                    <label htmlFor={"create-player-color-" + color.name}>
                                    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M90.665 35.387c0-4.35 2.948-7.815 2.566-8.189-.381-.374-3.087.442-5.064.068-1.942-.374-11.239-3.704-13.424-3.466-2.186.238-2.498 1.19-4.51 1.563-2.046.374-5.273-.442-7.25 0-1.942.442-1.595 1.19-3.087 1.563-1.492.374-1.734 0-3.226 0s-3.677.68-3.677.68v-1.088c0-.645.208-1.257.555-1.767l1.353-2.922c.173-.272.277-.544.277-.883v-3.534a.616.616 0 0 0-.624-.612h-.971a.616.616 0 0 0-.625.612v2.752c0 .612-.52 1.121-1.144 1.121H47.72c-.624 0-1.144-.51-1.144-1.12v-2.753a.616.616 0 0 0-.625-.612h-.971a.616.616 0 0 0-.624.612v3.466c0 .305.104.611.277.883l1.353 2.922c.347.51.555 1.156.555 1.768v42.68h-.45c-.66 0-1.215.509-1.215 1.189v3.907l-.59-.51c-.381-.305-.936-.271-1.214.136l-3.642 4.792h-1.943c-.485-.238-1.075-.374-1.734-.374-1.353 0-2.463.578-2.74 1.36a3.86 3.86 0 0 0-.902-.103c-1.527 0-2.775.748-2.775 1.7v.101a3.854 3.854 0 0 0-.902-.102c-3.47 0-3.33 2.956-3.33 2.956v.544s-.104 2.719-2.429 4.927l-.069.068-.035.034a3.28 3.28 0 0 0-.97 2.345c0 1.903 6.729 8.665 28.131 8.665 21.403 0 28.133-6.762 28.133-8.665 0-.918-.347-1.733-.972-2.345l-.034-.034-.07-.068c-2.359-2.208-2.428-4.927-2.428-4.927v-.544s.173-2.956-3.33-2.956c-.312 0-.624.034-.902.102v-.102c0-.951-1.249-1.699-2.775-1.699a3.86 3.86 0 0 0-.902.102c-.277-.781-1.387-1.36-2.74-1.36-.66 0-1.249.137-1.735.375h-1.942l-3.608-4.825c-.277-.374-.867-.442-1.214-.136l-.59.51v-3.909c0-.645-.52-1.189-1.214-1.189h-.45V56.32s7.076-5.097 9.92-5.097c2.845 0 6.313 3.772 9.574 3.772 3.226 0 4.232-2.888 8.88-2.888 4.683 0 11.517 6.626 12.21 6.626.694 0 .694-2.14 1.804-3.534 1.145-1.427 3.018-2.073 3.018-2.073.035-1.325-7.7-9.548-7.7-17.738z" fill="#000"></path></g><defs><clipPath id="clip0"><path fill="#fff" transform="translate(21.6 16.8)" d="M0 0h76.8v84H0z"></path></clipPath></defs></svg>
                                        <span>{ color.name }</span>
                                    </label>
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