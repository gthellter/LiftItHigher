import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button, Input } from '@ui-kitten/components';
import { Set } from './Set';

export const Exercise = ({exercise, workout, exerciseIndex, reRender}) => {


  const [exerciseSets, setExerciseSets] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(()=> {
    const tempSets = {};
    for ( let i = 1; i <= exercise.numberOfSets; i++) {
      let currentSet = {
        setNumber: i,
        weight: '',
        reps: ''}
        tempSets[i] = currentSet;
      }
      setExerciseSets(tempSets);
      setLoading(false);
  }, [exercise])


if (exercise.name === 'none' || loading) {
  return (
    <View style={{flexDirection:'column', alignItems:'center'}}>
      <Text style={{justifyContent:'center'}} category='h3'>Add Exercises Below</Text>
    </View>)
} else {
  return (
    <View style={{flexDirection:'column', alignItems: 'center'}}>
      <Text category="h5" >{exercise.currentExercise.name}</Text>
      <View style={{flexDirection:'row', alignItems: 'center'}}>
        <Text style={columnStyles}>Set</Text>
        <Text style={columnStyles}>Max Weight/Reps</Text>
        <Text style={columnStyles}>Previous Weight/Reps</Text>
        <Text style={columnStyles}>Current Weight</Text>
        <Text style={columnStyles}>Current Reps</Text>
      </View>
      {Object.keys(exerciseSets).map((set, index) => (
        <Set set={index + 1} workout={workout} exerciseIndex={exerciseIndex} key={index}
          exerciseId={exercise.currentExercise.id} reRender={reRender}/>
      ))}
    </View>
)}}

const columnStyles = {
  flex: 1,
  textAlign: 'center',
  maxWidth:60,
  minWidth: 60

}
