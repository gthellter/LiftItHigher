import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button, Select, SelectItem, Radio, RadioGroup, Input } from '@ui-kitten/components';
import { useWorkoutStore } from './WorkoutStore';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { saveWorkouts } from './getData';

//============Icons=======================
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


//============Component=======================####################
const AddWorkoutScreen = ({navigation, route}) => {
  const setWorkouts = useWorkoutStore((state) => state.setWorkouts);
  const workouts = useWorkoutStore((state) => state.workouts);

  const [newWorkout, setNewWorkout] = useState('');

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const handleSubmit = () => {
    console.log(newWorkout);
    setWorkouts(workouts.push(newWorkout));
    console.log(workouts);
    saveWorkouts();
    navigateBack();
  }

  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva}
    theme={{...eva.dark, ...theme}}
    customMapping={mapping}>
    <SafeAreaView style={{ flex: 1,}}>
      <TopNavigation title='Add Workout' alignment='center' accessoryLeft={BackAction} />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 500, maxWidth: 500 }}>
        <View style={{flex: 1, flexShrink: 1, top: 10, maxWidth: 400, alignItems: 'center'}} >
          <Text style={{paddingBottom: 5}}>Please enter new workout:</Text>
          <Input
            placeholder='Enter Workout'
            value={newWorkout}
            onChangeText={nextValue => setNewWorkout(nextValue)}
          />
        </View>
        <View>
          <Button onPress={handleSubmit}>Submit</Button>
        </View>

      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
    </>
    )
}

export default AddWorkoutScreen;