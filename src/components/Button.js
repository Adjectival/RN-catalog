// import libraries
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => {
	return (
		<TouchableOpacity
		style={styles.btn}>
			<Text style={styles.btnText}>
				Look up this Bootleg
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	btn: {
		flex: 1,
		alignSelf: 'stretch',
		padding: 8,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: 'navy',
	},
	btnText: {
		flex: 1,
		alignSelf: 'center',
		color: 'navy',
		fontWeight: '600',
	}
});

export default Button;