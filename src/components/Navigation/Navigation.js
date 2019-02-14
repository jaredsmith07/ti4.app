import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

	render() {
		return ( 
            <nav>
                <ul>
                    <li><NavLink to="/players">Players</NavLink></li>
                    <li><NavLink to="/round">Round</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                </ul>
            </nav>
		);
	}
}

export default Navigation;