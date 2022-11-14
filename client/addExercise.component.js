import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button, Select, SelectItem } from '@ui-kitten/components';
import { useWorkoutStore } from './WorkoutStore';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SelectValue } from './SelectValue';

//============Icons=======================
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const CheckmarkIcon = (props) => (
  <Icon {...props} name='checkmark-outline' />
)

//============Component=======================
const AddExerciseScreen = ({navigation, route}) => {

  const [loading, setLoading] = useState(true);

//==========Get data from state management=======
const exerciseList = useWorkoutStore.getState().exerciseList;
const muscleGroups = useWorkoutStore.getState().muscleGroups;
const equipment = useWorkoutStore.getState().equipment;

const onSubmit = (d) => {
  console.log(d);
};

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const acceptExercise = () => {
    navigation.goBack();
  };

  const AcceptAction = () => (
    <TopNavigationAction icon={CheckmarkIcon} onPress={acceptExercise}/>
  );

  if (loading) {
    return (
      <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva}
    theme={{...eva.dark, ...theme}}
    customMapping={mapping}>
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Add Exercise' alignment='center' accessoryLeft={BackAction} accessoryRight={AcceptAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <View style={{flex: 1, flexShrink: 1, top: 10}} >
          <Text>loading</Text>
        </View>
      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
  </>
    )
  } else {
    return (
      <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva}
    theme={{...eva.dark, ...theme}}
    customMapping={mapping}>
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Add Exercise' alignment='center' accessoryLeft={BackAction} accessoryRight={AcceptAction}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 500 }}>
        <View style={{flex: 1, flexShrink: 1, top: 10}} >
          <SelectValue  selectGroup={muscleGroups} setSelectGroup={setMuscleGroups}/>
        </View>
      </Layout>
    </SafeAreaView>
    </ApplicationProvider>
  </>
  )
}
};


export default AddExerciseScreen;
