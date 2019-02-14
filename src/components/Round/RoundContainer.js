import React, { Component } from 'react';

class RoundContainer extends Component {

	render() {
		return ( 
			<div className="strategies flex-row">
				{this.props.strategies.map( (strategy) => (
					<div class="card">{ strategy.name }</div>
				))}
			</div>
		);
	}
}

export default RoundContainer;