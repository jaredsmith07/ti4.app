import React, { Component } from 'react';

class RoundContainer extends Component {

	render() {
		return (
			<div className="round">
				<div className="strategies">
					{this.props.strategies.map(strategy => (
						<div className={"card strategy__" + strategy.name} key={strategy.id}>
							<h2>{ strategy.name }</h2>
							<div className="strategy__players">
							{this.props.players.map(player => (
								<button type="button">{ player.name }</button>
							))}
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default RoundContainer;