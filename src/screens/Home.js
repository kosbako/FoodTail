import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Home extends Component {
  static options(passProps) {
    return {
      topBar: {
        title: {
          text: 'Foodtail',
          color: '#6e6e6e',
          fontFamily: 'Livvic-SemiBold',
          alignment: 'center',
          fontSize: 18,
        },
        drawBehind: false,
        hideOnScroll: true,
        visible: false,
        animate: true,
        background: {
          color: '#71c9ce',
        },
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={{height: '50%'}}>
            <ImageBackground
              style={styles.image}
              imageStyle={{opacity: 0.4}}
              resizeMode="cover"
              source={require('../assets/images/cocktail.jpg')}>
              <Text style={styles.text}>Explore Cocktails</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={{height: '50%'}}>
            <ImageBackground
              style={styles.image}
              imageStyle={{opacity: 0.3}}
              resizeMode="cover"
              source={require('../assets/images/food.jpg')}>
              <Text style={styles.text}>Explore Recipes</Text>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Livvic-RegularItalic',
    color: 'white',
  },
});
