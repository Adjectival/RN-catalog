// base libraries
import React from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import GameDetail from './src/components/GameDetail';
import GameList from './src/components/GameList';

// create component
const App = () => (
	<View style={styles.app}>
		<Header headerText={'Bootlegs'} />
		<View style={styles.body}>
			<GameList />
		</View>
	</View>
);

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    body: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'salmon'
    }
});

// render to devices
AppRegistry.registerComponent('albums', () => App);