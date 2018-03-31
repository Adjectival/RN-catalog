// base libraries
import React from 'react';
import { View, Text, AppRegistry, StyleSheet } from 'react-native';


// create component
const App = () => (
	<View style={styles.container}>
		<Text style={styles.text}>HUZZAH</Text>
		<Text style={styles.text}>HUZZAH</Text>
		<Text style={styles.text}>HUZZAH</Text>
		<Text style={styles.text}>HUZZAH</Text>
		<Text style={styles.text}>HUZZAH</Text>
		<Text style={styles.text}>HUZZAH</Text>
	</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'firebrick'
    }
});

// render to devices
AppRegistry.registerComponent('albums', () => App);