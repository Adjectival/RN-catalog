// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Game from './Game';

// make component
const GameList = () => {
	return (
	<View>
		<Game/>
		<Game/>
		<Game/>
		<Game/>
	</View>
	);
};


// export component
export default GameList;