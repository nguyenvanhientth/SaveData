/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableHighlight, AsyncStorage} from 'react-native';

export default class App extends Component {
  saveData(){
    let obj = {
      name: 'vanhien',
      email: 'nguyenvanhien200895',
      age: '24'
    }
    AsyncStorage.setItem('user',JSON.stringify(obj));
  }
  displayData = async () =>{
    try {
      let user = await AsyncStorage.getItem('user');
      let parent  = JSON.parse(user);
     
      console.warn(parent);

    } catch (error) {
      console.warn(error);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.saveData.bind(this)}>
          <Text>Save Data</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.displayData.bind(this)}>
          <Text>Display Data</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 90,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24
  }
});
