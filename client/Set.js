import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button, Input } from '@ui-kitten/components';
import { useWorkoutStore } from './WorkoutStore';

export const Set = ({set, workout, exerciseIndex, exerciseId}) => {
  // console.log('exerciseIndex', exerciseIndex);
  workout = workout.split(' ').join('');

  const exerciseSets = useWorkoutStore((state) => state.exerciseSets);
  const setExerciseSets = useWorkoutStore((state) => state.setExerciseSets);
  // console.log(exerciseSets);
  useEffect(() => {
    if(exerciseSets[exerciseId][set])
    setWeight(exerciseSets[exerciseId][set].weight)
    setReps(exerciseSets[exerciseId][set].reps)
  }, [])
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  if(!exerciseSets[exerciseId]) {
    exerciseSets[exerciseId] = {};
    exerciseSets[exerciseId][set] = {};
    setExerciseSets(exerciseSets);
  } else if (!exerciseSets[exerciseId][set]) {
    exerciseSets[exerciseId][set] = {};
    setExerciseSets(exerciseSets);
  }

  const onChangeWeight =(value) => {
    setWeight(value);
    exerciseSets[exerciseId][set] = { reps: reps, weight: value };
    setExerciseSets(exerciseSets);

  };
  const onChangeReps =(value) => {
    setReps(value)
    exerciseSets[exerciseId][set] = { weight: weight, reps: value };
    setExerciseSets(exerciseSets);
  };

  return (
    <View style={{flex:1, flexDirection:'row'}}>
      <Text style={columnStyles}>{set}</Text>
      <Text style={columnStyles}>[NI]</Text>
      <Text style={columnStyles}>[NI]</Text>
      <Input value={weight}
        onChangeText={onChangeWeight}
        style={setInputStyle}/>
      <Input value={reps}
        onChangeText={onChangeReps}
        style={setInputStyle}/>
    </View>
  )
}

const setInputStyle = {
  minWidth:60 ,
  maxWidth:60
}

const columnStyles = {
  flex:1,
  textAlign: 'center',
  maxWidth:60,
  minWidth: 60

}