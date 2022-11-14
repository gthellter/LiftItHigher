import { useWorkoutStore } from './WorkoutStore';
import axios from 'axios';


const getData = () => {

  const setWorkouts = useWorkoutStore((state) => state.setWorkouts)
  const setMuscleGroups = useWorkoutStore((state) => state.setMuscleGroups)
  const setEquipment = useWorkoutStore((state) => state.setEquipment)

  axios.get('https://wger.de/api/v2/muscle').then(results => {
      console.log(results.results);
      setMuscleGroups(results.results);
    }).catch(err => {
      console.log(err);
    });
  axios.get('https://wger.de/api/v2/equipment').then(results => {
    setEquipment(results.results)
  }).catch(err => {
    console.log(err);
  })
}

export default getData;