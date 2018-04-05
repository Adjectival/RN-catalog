// import libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import GameDetail from './GameDetail';

// make component
class GameList extends Component {
	// set initial state as empty
	state = { games: [] };

	componentWillMount() {
		axios.get('https://raw.githubusercontent.com/Adjectival/RN-catalog/master/src/mock_api.json')
			.then(response => this.setState({ games: response.data })
		);
	}

	renderGames() {
		return this.state.games.map(game =>
			<GameDetail key={game.key} game={game} />
		);
	}

	render() {
		console.log(this.state);

		return (
		<View>
			{this.renderGames()}
		</View>
		);
	}
}


// export component
export default GameList;