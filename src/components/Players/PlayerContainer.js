import React, { Component } from 'react';
import CreatePlayer from './CreatePlayer/CreatePlayer';
import Player from './Player/Player';

class PlayerContainer extends Component {

	render() {
		return ( 
            <div>
                <div className="players flex-row">
                    {this.props.players.map( (player, index) => (
                        <Player
                            key={player.id}
                            id={player.id}
                            name={player.name}
                            race={player.race}
                            color={player.color}
                            score={player.score}
                            index={index}
                            changeScore={this.props.changeScore}
                            removePlayer={this.props.removePlayer} 
                        />
                    ))}
                </div>

                <CreatePlayer
                    addPlayer={this.props.addPlayer} 
                />
            </div>
		);
	}
}

export default PlayerContainer;