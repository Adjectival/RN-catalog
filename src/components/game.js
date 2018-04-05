// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// make component
const Game = () => {
	return (
	<View style={styles.view}>
		<Text style={styles.game}>Game Title</Text>
	</View>
	);
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: 'navy',
        justifyContent: 'center',
        alignItems: 'center'
	},
	game: {
		color: 'gold',
		fontSize: 22,
		padding: 29
	}
});

// export component
export default Game;