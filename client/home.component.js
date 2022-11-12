import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Divider, Layout, Text, Button, TopNavigation } from '@ui-kitten/components';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const HomeScreen = ({ navigation }) => {
  const [workouts, setWorkouts] = useState(['Push Day 1', 'Pull Day 1', 'Leg Day 1', 'Push Day 2', 'Pull Day 2', 'Leg Day 2']);

  const navigateWorkout = () => {
    navigation.navigate('Workout');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='WorkoutAppr' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {workouts.map((workout, index) => (
      <Text onPress={navigateWorkout} category='h1' style={{margin:30}} key={index}>{workout}</Text>
      ))}
      </Layout>
    </SafeAreaView>
)
  };

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva}
    theme={{...eva.dark, ...theme}}
    customMapping={mapping}>
      <HomeScreen />
    </ApplicationProvider>
  </>
);