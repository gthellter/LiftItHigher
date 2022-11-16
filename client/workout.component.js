import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View, Alert } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button } from '@ui-kitten/components';
import { useWorkoutStore } from './WorkoutStore';
import { Exercise } from './Exercise';
import { useIsFocused } from "@react-navigation/native";
import { getMuscleGroups, getEquipment, saveWorkouts } from './getData';


const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const WorkoutScreen = ({ navigation, route }) => {
  const {workout} = route.params;

  const isFocused = useIsFocused();

  useEffect(() => {
    setCurrentExercises(ExerciseList[workout.split(' ').join('')] || [{name: 'none'}])
  }, [isFocused])
  // get from store
  const setWorkouts = useWorkoutStore((state) => state.setWorkouts)
  const ExerciseList = useWorkoutStore((state) => state.exerciseList)
  const [currentExercises, setCurrentExercises] = useState(ExerciseList[workout.split(' ').join('')] || [{name: 'none'}])

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const handleAddExercise = () => {
    navigation.navigate('addExercise',{ workout });
  };

  const handleSaveWorkout = () => {
    saveWorkout().then((results) => {
      Alert.alert("Workout", 'Workout Saved', {cancellable: true})
    })
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
        <View style={{flex: 1, flexShrink: 1, top: 10, position: 'absolute'}} >
          {currentExercises.map((exercise, index) => (
            <Exercise exercise={exercise} key={index} workout={workout} exerciseIndex={index} />
          ))}
        </View>
        <View style={{flex:1, flexDirection:'row', position: 'absolute', bottom:-30}}>
        <Button style={{flex: 1, justifyItems: 'flex-start', flexShrink: 2, maxHeight: 2, maxWidth: 60, bottom: 30, margin:30, borderRadius:'60%' }}
          onPress={() => {handleAddExercise()}}>+</Button>
        <Button style={{flex: 1, justifyItems: 'flex-end', flexShrink: 2, maxHeight: 2, bottom: 30, margin: 30 }}
          onPress={() => {handleSaveWorkout()}}>Save Workout</Button>
          </View>
      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
  </>
  );
};

export default WorkoutScreen;