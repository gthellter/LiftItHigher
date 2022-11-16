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
