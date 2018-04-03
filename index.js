// base libraries
import React from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import Game from './src/components/Game';
import GameList from './src/components/GameList';

// create component
const App = () => (
	<View style={styles.app}>
		<Header headerText={'Bootlegs'} />
		<View style={styles.card}>
			<GameList/>
		</View>
	</View>
);

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    card: {
        flex: 2,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

// render to devices
AppRegistry.registerComponent('albums', () => App);