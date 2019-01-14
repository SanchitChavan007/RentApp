/** @format */

import { Navigation } from 'react-native-navigation';
import HomeScreen from './components/screens/HomeScreen';
import SignInScreen from './components/screens/SignInScreen';
import SignUpScreen from './components/screens/SignUpScreen';



Navigation.registerComponent(`HomeScreen`, () => HomeScreen);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'HomeScreen'
        }
      }
    });
  });

  Navigation.registerComponent(`SignUpScreen`, () => SignUpScreen);


Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'SignUpScreen'
        }
      }
    });
  });

  Navigation.registerComponent(`SignInScreen`, () => SignUpScreen);


  Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: 'SignInScreen'
          }
        }
      });
    });