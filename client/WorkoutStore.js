import create from 'zustand';


export const useWorkoutStore  = create(set => ({
  userData: {username: 'gthellter'},
  exerciseList: {},
  muscleGroups: [],
  equipment: [],
  workouts: ['Push Day 1', 'Pull Day 1', 'Leg Day 1', 'Push Day 2', 'Pull Day 2', 'Leg Day 2'],
  exerciseSets: {},
  setExercises: (exerciseList) => {
    set({exerciseList: exerciseList});
  },
  setMuscleGroups: (muscleGroups) => {
    set({muscleGroups: muscleGroups});
  },
  setEquipment: (equipment) => {
    set({ equipment: [...equipment, {id: -1, name: 'Other'}] });
  },
  setWorkouts: (workouts) => {
    set({ workouts });
  },
}))