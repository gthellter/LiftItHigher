import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { useWorkoutStore } from './WorkoutStore';
import { Exercise } from './Exercise';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const WorkoutScreen = ({ navigation, route }) => {
  const {workout} = route.params;
  // get from store
  const setWorkouts = useWorkoutStore((state) => state.setWorkouts)
  const ExerciseList = useWorkoutStore.getState().exerciseList;
  const [exercises, setExercises] = useState(ExerciseList[workout.split(' ').join('')] || [{name: 'looks like you don\'t have any Exercises yet, lazy?'}]);

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const handleAddExercise = () => {
    console.log('here')
    navigation.navigate('addExercise',{ workout });
  };

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva}
    theme={{...eva.dark, ...theme}}
    customMapping={mapping}>
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title={workout} alignment='center' accessoryLeft={BackAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <View style={{flex: 1, flexShrink: 1, top: 10}} >
          {exercises.map((exercise, index) => (
            <Exercise exercise={exercise} key={index} />
          ))}
        </View>
        <Button style={{flex: 1, justifyItems: 'flex-end', flexShrink: 2, maxHeight: 2, bottom: 40 }}
          onPress={() => {handleAddExercise()}}>Add Exercise</Button>
      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
  </>
  );
};

export default WorkoutScreen;