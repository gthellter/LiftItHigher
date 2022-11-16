import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Divider, Layout, Text, Button, TopNavigation } from '@ui-kitten/components';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useNavigation } from '@react-navigation/native';
import { useWorkoutStore } from './WorkoutStore';
import { getMuscleGroups, getEquipment } from './getData';

const HomeScreen = () => {

  // set state
  const setWorkouts = useWorkoutStore((state) => state.setWorkouts)
  const setMuscleGroups = useWorkoutStore((state) => state.setMuscleGroups)
  const setEquipment = useWorkoutStore((state) => state.setEquipment)
  // get state
  const workouts = useWorkoutStore.getState().workouts;

  useEffect(() => {
  getMuscleGroups().then(results => {
    setMuscleGroups(results.data.results);
  })
  getEquipment().then(results => {
    setEquipment(results.data.results);
  })
  },[])

  const navigation = useNavigation();
  const navigateWorkout = (workout) => {
    navigation.navigate('Workout',{ workout });
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <TopNavigation title='WorkoutApp' alignment='center'/> */}
      <Button>Add Workout</Button>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {workouts.map((workout, index) => (
      <Text onPress={() => {navigateWorkout(workout)}} category='h1' style={{margin:30}} key={index}>{workout}</Text>
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