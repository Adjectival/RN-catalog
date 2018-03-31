import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default class App extends React.Component {



  render() {
    return (
      <View style={styles.container}>
       <Text>Intended for Educational Purposes Only</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headerImage: {
        width: 369,
        height: 136,
        borderWidth: 10,
        borderColor: 'blue'
    },
    container: {
        flex: 1,
        backgroundColor: 'papayawhip',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
