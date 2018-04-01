// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// make component
const Header = () => {
	return (
	<View style={styles.view}>
		<Text style={styles.text}>Bootlegs</Text>
	</View>
	);
};

const styles = StyleSheet.create({
	view: {
		backgroundColor: 'peru',
        justifyContent: 'center',
        alignItems: 'center'
	},
	text: {
		color: 'indigo',
		fontSize: 22,
		paddingTop: 20,
		paddingBottom: 14,
		borderBottomWidth: 5
	}
});

// export component
export default Header;