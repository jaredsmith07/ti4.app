import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>Players</li>
						<li>Round</li>
						<li>Victory Points</li>
						<li>Agenda</li>
						<li>Settings</li>
					</ul>
				</nav>
			</header>
		);
	}
}

export default Header;