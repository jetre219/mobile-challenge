import React from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';

const Stack = createStackNavigator();

export const Screens = ({ loggedIn }) => {
  const screens = loggedIn ? (
    <Stack.Screen name="Home" component={HomeScreen} />
  ) : (
    <Stack.Screen name="Login" component={LoginScreen} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>{screens}</Stack.Navigator>
    </NavigationContainer>
  );
};

const mapState = (state) => ({
  loggedIn: state.authentication.loggedIn,
});

export default connect(mapState)(Screens);
