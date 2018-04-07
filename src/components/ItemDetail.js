// import libraries
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardPiece from './CardPiece';

// make component
const ItemDetail = ({ item }) => {
	const {title_image, title, platform, cart_image, game_image} = item;

	return (
		<Card style={styles.container}>
			<CardPiece>
				<View>
					<Image
	          		style={styles.title_image}
	          		source={{ uri: title_image }}
	        		/>
				</View>
				<View style={styles.textcontainer}>
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.platform}>{platform}</Text>
				</View>
			</CardPiece>

			<CardPiece>
				<View style={styles.imagecontainer}>
				
					<Image
	          		style={styles.cart_image}
	          		source={{ uri: cart_image }}
	        		/>
	        		<Image
	          		style={styles.cart_image}
	          		source={{ uri: game_image }}
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
		color: 'navy',
		fontSize: 22,
	},
	platform: {
		fontSize: 16,
	},
	imagecontainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	large_image: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		paddingLeft: 30,
	},
	cart_image: {
		width: 180,
		height: 115,
	},
});

export default ItemDetail;