import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import fbScreen from './Screens/fbScreen'
import instaScreen from './Screens/instaScreen'

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View>
        <View>  <AppHeader/> </View>
        <View style={styles.insta}>
          <Text style={styles.instaStyles}>INSTA</Text>
        </View></View>
      );
    }
  }