import create from 'zustand';


export const useWorkoutStore  = create(set => ({
  exerciseList: {},
  muscleGroups: [],
  equipment: [],
  setExercises: (exercises) => {
    set({exerciseList: exercises});
  },
  setMuscleGroups: (muscleGroups) => {
    set({muscleGroups: muscleGroups});
  },
  setEquipment: (equipment => {
    set({ equipment: [...equipment, {id: '', name: 'Other'}] })
  })
}))