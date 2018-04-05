// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// make component
const GameDetail = (props) => {
	return (
		<View style={styles.box}>
			<Text style={styles.titletext}>{props.game.title}</Text>
			<Text style={styles.smalltext}>{props.game.platform}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center',
		padding: 29,
		margin: 2
	},
	titletext: {
		color: 'gold',
		fontSize: 22,
	},
	smalltext: {
		fontSize: 16
	}
});

// export component
export default GameDetail;