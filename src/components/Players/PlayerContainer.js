import React, { Component } from 'react';
// import CreatePlayer from './CreatePlayer/CreatePlayer';
import Player from './Player/Player';

class PlayerContainer extends Component {

	render() {
		return ( 
            <div className="players__container">
                <div className="players__list flex-row">
                    {this.props.players.map( (player, index) => (
                        <Player
                            key={player.id}
                            id={player.id}
                            name={player.name}
                            race={player.race}
                            color={player.color}
                            score={player.score}
                            index={index}
                            removePlayer={this.props.removePlayer} 
                        />
                    ))}
                </div>
                <button className="button-lg primary-button" onClick={ () => this.props.handleModal('create-player', true) }>Add player</button>
            </div>
		);
	}
}

export default PlayerContainer;