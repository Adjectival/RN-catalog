// import libraries
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardPiece from './CardPiece';

// make component
const ItemDetail = (props) => {
	return (
		<Card style={styles.container}>
			<CardPiece style={styles.title_image}>
				<View>
					<Image
	          		style={styles.title_image}
	          		source={props.item.title_image}
	        		/>
				</View>
				<View style={styles.textcontainer}>
					<Text style={styles.title}>{props.item.title}</Text>
					<Text style={styles.platform}>{props.item.platform}</Text>
				</View>
			</CardPiece>

		</Card>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start'
	},
	title_image: {
		width: 60,
		height: 60
	},
	textcontainer: {
		justifyContent: 'space-around'
	},
	title: {
		color: 'gold',
		fontSize: 22,
	},
	platform: {
		fontSize: 16
	}
});

export default ItemDetail;