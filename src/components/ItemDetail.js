// import libraries
import React from 'react';
import { Text } from 'react-native';
import Card from './Card'
import CardPiece from './CardPiece';

// make component
const ItemDetail = (props) => {
	return (
		<Card>
			<CardPiece>
				<Text>{props.item.title}</Text>
			</CardPiece>
			<CardPiece>
				<Text>{props.item.platform}</Text>
			</CardPiece>
		</Card>
	);
};

// export component
export default ItemDetail;