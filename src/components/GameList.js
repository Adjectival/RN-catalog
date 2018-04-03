// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Game from './Game';

// make component
const GameList = () => {
	return (
	<View style={styles.list}>
		<Game/>
		<Game/>
		<Game/>
		<Game/>
	</View>
	);
};

const styles = StyleSheet.create({
	list: {
	}
});

// export component
export default GameList;