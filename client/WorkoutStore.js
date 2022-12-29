import create from 'zustand';


export const useWorkoutStore  = create(set => ({
  userData: {},
  exerciseList: {},
  muscleGroups: [],
  equipment: [],
  workouts: [],
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
  setExerciseSets: (exerciseSets) => {
    set({exerciseSets: exerciseSets});
  },
  setUserData: (userData) => {
    set({ userData });
  },
}))