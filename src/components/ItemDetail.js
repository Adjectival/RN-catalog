// import libraries
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardPiece from './CardPiece';

// make component
const ItemDetail = ({ item }) => {
	const {title_image, title, platform, cart_image, game_image} = item;
	const {container, sixty_image, textcontainer, game_title, game_platform, imagecontainer, large_image, small_image} = styles;

	return (
		<Card style={container}>
			<CardPiece>
				<View>
					<Image
	          		style={title_image}
	          		source={{ uri: title_image }}
	        		/>
				</View>
				<View style={textcontainer}>
					<Text style={game_title}>{title}</Text>
					<Text style={game_platform}>{platform}</Text>
				</View>
			</CardPiece>

			<CardPiece>
				<View style={imagecontainer}>
					<Image
	          		style={small_image}
	          		source={{ uri: cart_image }}
	        		/>
	        		<Image
	          		style={small_image}
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
	sixty_image: {
		width: 60,
		height: 60,
	},
	textcontainer: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 10,
	},
	game_title: {
		color: 'navy',
		fontSize: 22,
	},
	game_platform: {
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
	small_image: {
		width: 180,
		height: 115,
	},
});

export default ItemDetail;