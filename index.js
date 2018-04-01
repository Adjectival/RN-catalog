// base libraries
import React from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';
import Header from './src/components/header';

// create component
const App = () => (
	<View style={styles.app}>
		<Header></Header>
		<View style={styles.card}>
			<Text style={styles.text}>Game1</Text>
			<Text style={styles.text}>Game2</Text>
			<Text style={styles.text}>Game3</Text>
			<Text style={styles.text}>Game4</Text>
			<Text style={styles.text}>Game5</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
    app: {
        flex: 1,
        minWidth: '100%'
    },
    card: {
        flex: 2,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'firebrick'
    }
});

// render to devices
AppRegistry.registerComponent('albums', () => App);