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
        flexDirection: 'row',
        position: 'relative',
		elevation: 1,
	}
});

export default CardPiece;

