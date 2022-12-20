import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Divider, Layout, Text, Button, TopNavigation } from '@ui-kitten/components';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useNavigation } from '@react-navigation/native';
import { useWorkoutStore } from './WorkoutStore';
import { getMuscleGroups, getEquipment, getSavedWorkouts } from './getData';

const HomeScreen = () => {

  let loading = true;
  // set state
  const setWorkouts = useWorkoutStore((state) => state.setWorkouts)
  const setMuscleGroups = useWorkoutStore((state) => state.setMuscleGroups)
  const setEquipment = useWorkoutStore((state) => state.setEquipment)
  // get state from WorkoutStore
  const workouts = useWorkoutStore((state) => state.workouts);
  const setExercises = useWorkoutStore((state) => state.setExercises);
  const setExerciseSets = useWorkoutStore((state) => state.setExerciseSets);
  const setUserData = useWorkoutStore((state) => state.setUserData);


  useEffect(() => {
  getMuscleGroups().then(results => {
    setMuscleGroups(results.data.results);
  }).catch(err => {
    console.log(err);
  });

  getEquipment().then(results => {
    setEquipment(results.data.results);
  }).catch(err => {
      console.log(err);
    });

  getSavedWorkouts('gthellter').then(results => {
    console.log('results', results.data[0]);
    setExercises(results.data[0].exerciseList);
    setExerciseSets(results.data[0].exerciseSets);
    setUserData({username: results.data[0].username});
    let newWorkouts = [...workouts, results.data[0].workouts];
    setWorkouts(newWorkouts)
    loading = false;
  });

  },[])

  const navigation = useNavigation();
  const navigateWorkout = (workout) => {
    navigation.navigate('Workout',{ workout });
  }
  const handleAddWorkout = (e) => {
    navigation.navigate('addWorkout');
  }

    return (
      <SafeAreaView style={{ flex: 1 }}>
      <Button onPress={handleAddWorkout}>Add Workout</Button>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ScrollView>
      {workouts.map((workout, index) => (
        <Text onPress={() => {navigateWorkout(workout)}} category='h1' style={{margin:30}} key={index}>{workout}</Text>
        ))}
    </ScrollView>
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