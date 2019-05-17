import React, { Component } from 'react';
import * as constants from '../Rules/RulesData';

class RulesContainer extends Component {

	componentDidMount() {
		const ruleToggles = document.querySelectorAll('.rule__heading');
		ruleToggles.forEach( (ruleToggle) => {
			ruleToggle.addEventListener('click', (e) => {
				const toggle = e.target.closest('.rule__heading');
				const content = toggle.nextSibling;
				content.classList.add('rule__content--open');
			});
		})
	}

	render() {
		return ( 
            <div className="rules__list">
                {constants.rules.map( (rule) => (
					<div className="rule" key={rule.id}>
						<div className="rule__heading">
							<span>{rule.id}</span>
							<h2>{rule.title}</h2>
						</div>
						<div className="rule__content" dangerouslySetInnerHTML={{__html: rule.content}}></div>
					</div>
				))}
            </div>
		);
	}
}

export default RulesContainer;