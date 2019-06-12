import React, { Component } from 'react';
import StratCard from './StratCard/StratCard';

import { DragDropContextProvider } from 'react-dnd'
import TouchBackend from 'react-dnd-touch-backend';

class RoundContainer extends Component {

	render() {
		return (
			<div className="round__container">
				<DragDropContextProvider backend={TouchBackend}>
					<div className="round-strats card">
						<h2>Strategies</h2>
						<p>Drag and drop the strategies to the players.</p>
						<div className="round-strats__list flex-row">

							{this.props.strategies.map( (strategy, index) => (
								<StratCard
									key={strategy.id}
									id={strategy.id}
									name={strategy.name}
									color={strategy.color}
									index={index}
									pickStrat={this.props.pickStrat} 
								/>
							))}

						</div>
					</div>
					<div className="round-players flex-row">

						{this.props.players.map(player => (
							<div className="card">
								<p>{player.name}</p>
								<div className="dropzone">

								</div>
							</div>
						))}

					</div>
				</DragDropContextProvider>
			</div>
		);
	}
}

export default RoundContainer;