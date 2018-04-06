// import libraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// make component
const Header = (props) => {
	return (
	<View style={styles.view}>
		<Text style={styles.text}>{props.headerText}</Text>
	</View>
	);
};

const styles = StyleSheet.create({
	view: {
		height: 60,
		paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
		backgroundColor: 'steelblue',
		elevation: 1,
		position: 'relative'
	},
	text: {
		fontSize: 22,
		color: 'gold'
	}
});

// export component
export default Header;