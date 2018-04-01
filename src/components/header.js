// import libraries
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// make component
const Header = () => {
	return <Text style={styles.header}>Bootlegs</Text>;
};

const styles = StyleSheet.create({
	header: {
		color: 'indigo',
		paddingTop: 25,
		paddingBottom: 25,
		backgroundColor: 'peru',
		justifyContent: 'center'
	}

});

// export component
export default Header;