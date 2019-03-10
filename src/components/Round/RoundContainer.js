import React, { Component } from 'react';

class RoundContainer extends Component {

	render() {
		return (
			<div className="round">
				<div className="strategies">
					{this.props.strategies.map( (strategy) => (
						<div className="card"><h2>{ strategy.name }</h2></div>
					))}
				</div>
			</div>
		);
	}
}

export default RoundContainer;