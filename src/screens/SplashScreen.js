import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {goHome, goToAuth} from '../navigation';

export default class SplashScreen extends Component {
  async componentDidMount() {
    goToAuth();
  }
  render() {
    return (
      <View>
        <Text>Splashscreen</Text>
      </View>
    );
  }
}
