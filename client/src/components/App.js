
import React, { Component } from "react";
import AntonOr from './AntonOr.js'

import '../styles/App.css';

class App extends Component {
	render() {
		return (
			<div>
				<h1>gachimuchi chat</h1>
				<AntonOr orMessage = "Оруууу" />
			</div>
		);
	}
}

export default App;