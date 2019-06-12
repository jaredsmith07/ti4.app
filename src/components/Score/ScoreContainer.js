import React, { Component } from 'react';
import ScorePlayer from './ScorePlayer/ScorePlayer';

class ScoreContainer extends Component {

	render() {
		return (
			<div className="score__container">
                <div className="score__player-list card card--red flex-row">
                    {this.props.players.map( (player, index) => (
						<ScorePlayer
                            key={player.id}
                            id={player.id}
                            name={player.name}
                            race={player.race}
                            color={player.color}
                            score={player.score}
                            index={index}
                            changeScore={this.props.changeScore} 
                        />
                    ))}
                </div>
			</div>
		);
	}
}

export default ScoreContainer;