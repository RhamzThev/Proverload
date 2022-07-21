import { NativeModules } from 'react-native';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

const { FitnessModule } = NativeModules;

// FOR TESTING
var regimes = [
    {id: 1, name: "Pullin some bitches"},
];

var workouts = [
    {id: 1, name: "Pull A", regimeId: 1},
    {id: 2, name: "Pull B", regimeId: 1},
];

var sets = [
    {id: 1, workoutId: 1},
    {id: 2, workoutId: 1},
    {id: 3, workoutId: 1},
    {id: 4, workoutId: 1},
    {id: 5, workoutId: 2},
    {id: 6, workoutId: 2},
    {id: 7, workoutId: 2},
    {id: 8, workoutId: 2},
];

var exercises = [
    {id: 1, indExId: 1, setId: 1, sets: 3, reps: 10},
    {id: 2, indExId: 2, setId: 1, sets: 3, reps: 12},
    {id: 3, indExId: 3, setId: 2, sets: 4, reps: 10},
    {id: 4, indExId: 4, setId: 3, sets: 3, reps: 12},
    {id: 5, indExId: 5, setId: 3, sets: 3, reps: 10},
    {id: 6, indExId: 6, setId: 4, sets: 4, reps: 10},
    {id: 7, indExId: 7, setId: 5, sets: 4, reps: 8},
    {id: 8, indExId: 8, setId: 6, sets: 3, reps: 10},
    {id: 9, indExId: 6, setId: 6, sets: 3, reps: 12},
    {id: 10, indExId: 4, setId: 7, sets: 4, reps: 10},
    {id: 11, indExId: 9, setId: 8, sets: 3, reps: 8},
    {id: 12, indExId: 3, setId: 8, sets: 3, reps: 6},
];

var indExercises = [
    {id: 1, name: "DB Row"},
    {id: 2, name: "Incline DB Curls"},
    {id: 3, name: "Bent-Over Rows"},
    {id: 4, name: "Bands"},
    {id: 5, name: "Preacher Curls"},
    {id: 6, name: "Rear Delt Raises"},
    {id: 7, name: "BB Rows"},
    {id: 8, name: "Concentration Curls"},
    {id: 9, name: "Hammer Curls"},
];

// FOR TESTING
const testState = {
    regimes: regimes,
    workouts: null,
    sets: null,
    exercises: null,
    indExercises: indExercises,
}

// INITIAL STATE
const initialState = {
    regimes: null,
    workouts: null,
    sets: null,
    exercises: null,
    indExercises: null,
}

function readWorkoutByRegimeId(id) {
    return workouts.filter(workout => {
        return workout.regimeId == id;
    })
}

function readSetByWorkoutId(id) {
    return sets.filter(set => {
        return set.workoutId == id;
    })
}

function joinSets(sets) {
    var output = sets
    for (var i in output) {
        var exercises = readExerciseBySetId(output[i].id)
        output[i].exercises = joinExercises(exercises);
    }
    return output

}

function readExerciseBySetId(id){
    return exercises.filter(exercise => {
        return exercise.setId == id;
    })
}

function joinExercises(exercises) {
    var output = exercises
    for (var i in output) {
        var name = readIndExName(output[i].indExId)
        output[i].name = name;
    }
    return output;
}

function readIndExName(id){
    var [indExercise] = indExercises.filter(indEx => {
        return indEx.id == id
    })

    return indExercise.name;
}

const fitnessSlice = createSlice({
    name: "fitness",
    initialState: testState,
    reducers: {
        selectRegime(state, action) {
            state.workouts = readWorkoutByRegimeId(action.payload)
        },
        selectWorkout(state, action) {
            var sets = readSetByWorkoutId(action.payload)
            state.sets = joinSets(sets)
        }
    }
})

export const { selectRegime, selectWorkout } = fitnessSlice.actions
export default fitnessSlice.reducer