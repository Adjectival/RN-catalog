// import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import Game from './Game';

// make component
class GameList extends Component {
	// set initial state as empty
	state = { games: [] };

	componentWillMount() {
		axios.get('https://raw.githubusercontent.com/Adjectival/RN-catalog/master/src/mock_api.json')
			.then(response => this.setState({ games: response.data }));
	}

	renderGames() {
		return this.state.games.map(game => <Text>{game.title}</Text>);
	}

	render() {
		console.log(this.state);

		return (
		<View style={styles.list}>
			{this.renderGames()}
		</View>
		);
	}
}

const styles = StyleSheet.create({
	list: {
	}
});

// export component
export default GameList;