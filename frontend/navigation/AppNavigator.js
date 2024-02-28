// AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn';
// import home from '../screens/home'
import Page from '../screens/Page';
import Onbording2 from '../screens/Onbording2';
import SignUp from '../screens/SignUp'
import Onbording from '../screens/Onbording';
import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen.js';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
   
      <Stack.Navigator initialRouteName="Page">
      <Stack.Screen name='we' component={Page} />
      <Stack.Screen name='Onbording ' component={Onbording} />
      <Stack.Screen name='Onbording2' component={Onbording2} />

      <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        {/* <Stack.Screen name="home" component={home} /> */}

        {/* Add more screens as needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
