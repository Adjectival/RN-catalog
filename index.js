// base libraries
import React from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';
import Header from './src/components/header';
import Game from './src/components/game';

// create component
const App = () => (
	<View style={styles.app}>
		<Header headerText={'Bootlegs'} />
		<View style={styles.card}>
			<Game/>
			<Game/>
			<Game/>
			<Game/>
			<Game/>
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