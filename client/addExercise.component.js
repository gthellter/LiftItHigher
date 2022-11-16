import React, { useState, useEffect } from 'react';
import * as eva from '@eva-design/eva';
import { default as theme } from '../theme.json';
import { default as mapping } from '../mapping.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, TopNavigation, TopNavigationAction, ApplicationProvider, IconRegistry, Layout, Text, Button, Select, SelectItem, Radio, RadioGroup } from '@ui-kitten/components';
import { useWorkoutStore } from './WorkoutStore';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { SelectValue } from './SelectValue';
import { getExercises } from './getData';

//============Icons=======================
const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const CheckmarkIcon = (props) => (
  <Icon {...props} name='checkmark-outline' />
)

//============Component=======================####################
const AddExerciseScreen = ({navigation, route}) => {
// get workout name
const { workout } = route.params;

//==========Get data from state management=======
const exerciseList = useWorkoutStore.getState().exerciseList;
const muscleGroups = useWorkoutStore.getState().muscleGroups;
const equipment = useWorkoutStore.getState().equipment;
//=========Set Data to state Management=========
const setExercises = useWorkoutStore((state) => state.setExercises)

const [ muscleGroup, setMuscleGroup ] = useState({});
const [ currentEquipment, setCurrentEquipment ] = useState({});
const [ currentExerciseList, setCurrentExerciseList ] = useState([{
  id: -1,
  name: 'Please select Equipment and MuscleGroup'
}]);
const [ currentExercise, setCurrentExercise ] = useState({});
const [ numberOfSets, setNumberOfSets] = useState(3);

useEffect(() => {
  getExercises(muscleGroup, currentEquipment).then(res => {
    if (res.data.count === 0) {
      setCurrentExerciseList([{
        id: -2,
        name: 'Sorry, No Exercises Available for your selection'
      }])
    }
    setCurrentExerciseList(res.data.results)
  })
}, [currentEquipment, muscleGroup])

  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );

  const acceptExercise = () => {
    const workoutName = workout.split(' ').join('');
    const selectedExercise = { muscleGroup, currentEquipment, currentExercise, numberOfSets};
    exerciseList[workoutName] = exerciseList[workoutName] || [];
    exerciseList[workoutName].push(selectedExercise);
    setExercises(exerciseList);
    navigation.goBack();
  };

  const AcceptAction = () => (
    <TopNavigationAction icon={CheckmarkIcon} onPress={acceptExercise}/>
  );

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
        <Text>Please select Muscle Group to Train:</Text>
        <SelectValue  selectGroup={muscleGroups} setSelectGroup={setMuscleGroup}/>
      </View>
      <View style={{flex: 1, flexShrink: 1, top: 10}} >
        <Text>Please select Equipment:</Text>
        <SelectValue  selectGroup={equipment} setSelectGroup={setCurrentEquipment}/>
      </View>
      <View style={{flex: 1, flexShrink: 1, top: 10}} >
      <Text>Please select Exercise to Add:</Text>
      <SelectValue  selectGroup={currentExerciseList} setSelectGroup={setCurrentExercise}/>
      </View>
      <View style={{flex: 1, flexShrink: 1, top: 10}} >
      <Text>Please select Number Of Sets:</Text>
      <SetRadio setSets={setNumberOfSets} />
      </View>
    </Layout>
  </SafeAreaView>
  </ApplicationProvider>
  </>
  )
};

const SetRadio = ({setSets}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const setNumberOfSets = (index) => {
    setSelectedIndex(index)
    setSets(index + 1);
  }
  return (
    <>
      <RadioGroup
        selectedIndex={selectedIndex}
        onChange={index => setNumberOfSets(index)}
        style={{flex: 1, flexDirection: 'row'}}>
        <Radio>1</Radio>
        <Radio>2</Radio>
        <Radio>3</Radio>
        <Radio>4</Radio>
        <Radio>5</Radio>
      </RadioGroup>

    </>
  );
}


export default AddExerciseScreen;
