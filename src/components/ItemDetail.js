// import libraries
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardPiece from './CardPiece';

// make component
const ItemDetail = (props) => {
	return (
		<Card style={styles.container}>
			<CardPiece>
				<View>
					<Image
	          		style={styles.title_image}
	          		source={{ uri: props.item.title_image }}
	        		/>
				</View>
				<View style={styles.textcontainer}>
					<Text style={styles.title}>{props.item.title}</Text>
					<Text style={styles.platform}>{props.item.platform}</Text>
				</View>
			</CardPiece>

			<CardPiece>
				<View style={styles.large_image}>
					<Image
	          		style={styles.cart_image}
	          		source={{ uri: props.item.cart_image }}
	        		/>
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
		height: 60,
	},
	textcontainer: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 10,
	},
	title: {
		color: 'gold',
		fontSize: 22,
	},
	platform: {
		fontSize: 16,
	},
	large_image: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		paddingLeft: 30,
	},
	cart_image: {
		width: 250,
		height: 150,
	},
});

export default ItemDetail;