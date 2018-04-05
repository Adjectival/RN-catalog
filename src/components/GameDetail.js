// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// make component
const GameDetail = (props) => {
	return (
		<View>
			<Text style={styles.box}>{props.game.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: 'navy',
        justifyContent: 'center',
        alignItems: 'center'
	},
	box: {
		color: 'gold',
		fontSize: 22,
		padding: 29
	}
});

// export component
export default GameDetail;