import { useWorkoutStore } from './WorkoutStore';
import axios from 'axios';


export const getMuscleGroups = () => {
  return axios.get('https://wger.de/api/v2/muscle').then(results => {
      return results;
    }).catch(err => {
      console.log(err);
    });
  };

export const getEquipment = () => {
  return axios.get('https://wger.de/api/v2/equipment').then(results => {
    return results
  }).catch(err => {
    console.log(err);
  })
};

export const getExercises = (muscle, equipment) => {
  let equipmentString = equipment.id > -1 ? `&equipment=${equipment.id}` : '';
  return axios.get(`https://wger.de/api/v2/exercise/?muscles=${muscle.id}${equipmentString}`).then(results => {
    return results;
}).catch(err => {
  console.log(err);
});
  };

export const saveWorkouts = () => {
  const exerciseList = useWorkoutStore.getState().exerciseList;
  const exerciseSets = useWorkoutStore.getState().exerciseSets;
  const workouts = useWorkoutStore.getState().workouts;
  const userData = useWorkoutStore.getState().userData;
  const data = {username: userData.username, exerciseSets, exerciseList, workouts};
  console.log(data.exerciseSets['192'])
  return axios.post('http://localhost:80/saveWorkout', data).then(res => res).catch(err => {
    console.log(err);
  })
};

export const getSavedWorkouts = (username) => {
  console.log(username);
  return axios.get(`http://localhost:80/getWorkout/?username=${username}`).catch(err => {
    console.log(err);
  })
};
