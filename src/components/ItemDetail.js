// import libraries
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from './Card'
import CardPiece from './CardPiece';
import Button from './Button';

// make component
const ItemDetail = ({ item }) => {
	const {title_image, title, platform, cart_image, game_image} = item;
	const {container, thumbnail, textcontainer, game_title, game_platform, large_image, small_image} = styles;

	return (
		<Card style={container}>
			<CardPiece>
				<View>
					<Image
	          		style={thumbnail}
	          		source={{ uri: title_image }}
	        		/>
				</View>
				<View style={textcontainer}>
					<Text style={game_title}>{title}</Text>
					<Text style={game_platform}>{platform}</Text>
				</View>
			</CardPiece>

			<CardPiece>
				<Image
          		style={small_image}
          		source={{ uri: cart_image }}
        		/>
        		<Image
          		style={small_image}
          		source={{ uri: game_image }}
        		/>
			</CardPiece>
			
			<CardPiece>
				<Button />
			</CardPiece>

		</Card>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
	},
	thumbnail: {
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

	large_image: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		paddingLeft: 30,
	},
	small_image: {
		height: 120,
		flex: 1,
		width: null,
	},
});

export default ItemDetail;