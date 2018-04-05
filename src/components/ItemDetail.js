// import libraries
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import CardSection from './CardSection'

// make component
const ItemDetail = (props) => {
	return (
		<View style={styles.box}>
			<Text style={styles.titletext}>{props.item.title}</Text>
			<Text style={styles.smalltext}>{props.item.platform}</Text>
			<CardSection />
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
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
        justifyContent: 'center',
		padding: 20,
	},
	titletext: {
		color: 'gold',
		fontSize: 22,
	},
	smalltext: {
		fontSize: 16
	}
});

// export component
export default ItemDetail;