import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home.component';
import WorkoutScreen from './workout.component';
import AddExerciseScreen from './addExercise.component';
import AddWorkoutScreen from './addWorkout.component';


const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator screenOptions={{headerShown: false}}>
    <Screen name='Home' component={HomeScreen}/>
    <Screen name='Workout' component={WorkoutScreen}/>
    <Screen name='addExercise' component={AddExerciseScreen} />
    <Screen name='addWorkout' component={AddWorkoutScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
);

