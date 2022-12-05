import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home.component';
import WorkoutScreen from './workout.component';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Workout' component={WorkoutScreen}/>
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);

