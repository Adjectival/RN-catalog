// import libraries
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
	return (
		<View style={styles.container}>
			{props.children}
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		borderColor: 'black',
		borderWidth: 1,
		borderBottomWidth: 0,
		borderRadius: 2,
		shadowColor: 'black',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		shadowOffset: { width: 0, height: 2 },
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
		backgroundColor: 'steelblue',
        alignItems: 'center',
        justifyContent: 'center'
	}
});

// export
export default Card;
