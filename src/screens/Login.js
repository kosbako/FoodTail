import React, {Component} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Navigation} from 'react-native-navigation';
import {goHome} from '../navigation';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  goToRegister = () => {
    Navigation.push('Auth', {
      component: {
        name: 'RegisterScreen',
      },
    });
  };

  login = () => {
    goHome();
  };
  render() {
    return (
      <ImageBackground
        style={styles.container}
        imageStyle={{opacity: 0.7}}
        resizeMode="cover"
        blurRadius={1}
        source={require('../assets/images/login-background.jpg')}>
        <KeyboardAvoidingView
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={styles.header}>Foodtail</Text>
          <Text style={styles.registerText}>
            Don't have an account?
            <TouchableWithoutFeedback onPress={this.goToRegister}>
              <Text style={styles.registerTextLink}>Register</Text>
            </TouchableWithoutFeedback>
          </Text>
          <View style={styles.box}>
            <Input
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.input}
              placeholder="Email"
              onChangeText={text => this.setState({email: text})}
              inputStyle={{fontFamily: 'Livvic-RegularItalic'}}
              leftIcon={{type: 'ionicon', name: 'ios-mail'}}
            />
            <Input
              containerStyle={styles.inputContainer}
              inputContainerStyle={styles.input}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry
              inputStyle={{fontFamily: 'Livvic-RegularItalic'}}
              placeholder="Password"
              leftIcon={{type: 'ionicon', name: 'ios-lock'}}
            />
            <Button
              title="Login"
              type="solid"
              raised
              onPress={this.login}
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              titleStyle={{fontFamily: 'Livvic-Regular'}}
            />
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(0,0,0)',
  },
  header: {
    marginTop: '10%',
    marginBottom: '10%',
    fontFamily: 'Livvic-BoldItalic',
    fontSize: 24,
    color: 'white',
  },
  box: {
    height: '60%',
    width: '80%',
    backgroundColor: 'rgba(255,255,255, 0.4)',
    borderRadius: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 0,
    backgroundColor: 'white',
    width: '90%',
    marginTop: 15,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8785a2',
    width: '100%',
  },
  input: {
    borderBottomWidth: 0,
  },
  registerText: {
    marginBottom: 5,
    color: '#e6f2e6',
    fontSize: 18,
    fontFamily: 'Livvic-Regular',
  },
  registerTextLink: {
    paddingLeft: 20,
    textDecorationLine: 'underline',
    fontFamily: 'Livvic-Regular',
  },
});
