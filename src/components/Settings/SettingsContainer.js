import React, { Component } from 'react';

class SettingsContainer extends Component {

	render() {
		return ( 
            <div>
                <label>Theme</label>
                <select>
                    <option>Nebula (Default)</option>
                    <option>Minimal Dark</option>
                    <option>Minimal Light</option>
                </select>
            </div>
		);
	}
}

export default SettingsContainer;