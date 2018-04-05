// import libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardPiece = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderColor: 'red',
		padding: 5,
		backgroundColor: '#cfc',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
		elevation: 1,
	},
	titletext: {
		color: 'gold',
		fontSize: 22,
	},
	smalltext: {
		fontSize: 16
	}
});

export default CardPiece;

