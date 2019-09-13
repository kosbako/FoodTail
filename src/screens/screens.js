import {Navigation} from 'react-native-navigation';
import HomeScreen from './Home';
import SplashScreen from './SplashScreen';
import Login from './Login';
import Register from './Register';

const registerScreens = () => {
  // Navigation.registerComponentWithRedux(`LoginScreen`, () => Login, Provider, store);
  Navigation.registerComponent(`HomeScreen`, () => HomeScreen);
  Navigation.registerComponent(`SplashScreen`, () => SplashScreen);
  Navigation.registerComponent(`LoginScreen`, () => Login);
  Navigation.registerComponent(`RegisterScreen`, () => Register);
};
export default registerScreens;
