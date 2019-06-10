import React, { Component } from 'react';
import DndTest from '../dnd/DndTest';

class RoundContainer extends Component {

	render() {
		return (
			<div className="round">

				<DndTest />

				<div className="strategies flex-row">

					

					{this.props.strategies.map( (strategy, index) => (
						<div className={"card card--" + strategy.color} key={strategy.id}>
							<p className="strategy__number">{ strategy.id }</p>
							<h2>{ strategy.name }</h2>
							<div className="strategy__players">
{/* 
							{this.props.players.map(player => (
								<button
									type="button"
									class={"button-md button--" + strategy.color}
									onClick={ () => this.props.pickStrat(index, player.name) }>
									{ player.name }
								</button>
							))} */}
							
							</div>
						</div>
					))}

				</div>
			</div>
		);
	}
}

export default RoundContainer;