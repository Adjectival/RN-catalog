// import libraries
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ItemDetail from './ItemDetail';

// make component
class ItemList extends Component {
	// set initial state as empty
	state = { items: [] };

	componentWillMount() {
		axios.get('https://raw.githubusercontent.com/Adjectival/RN-catalog/master/src/mock_api.json')
			.then(response => this.setState({ items: response.data })
		);
	}

	renderItems() {
		return this.state.items.map(item =>
			<ItemDetail key={item.key} item={item} />
		);
	}

	render() {

		return (
		<ScrollView>
			{this.renderItems()}
		</ScrollView>
		);
	}
}


// export component
export default ItemList;