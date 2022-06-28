import { NativeModules } from 'react-native';

import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import users from './users.json'

const { UserModule } = NativeModules;

// const DATA = [
//     {"username": "rozfom", "password": "test", "name": "Rhamsez", "age": 19, "weight": 225, "height": 70},
//     {"username": "exampleone", "password": "test", "name": "Example One", "age": 20, "weight": 180, "height": 100},
//     {"username": "exampletwo", "password": "test", "name": "Example Two", "age": 25, "weight": 250, "height": 60},
// ]

// function usernameExists(username) {
//     for (let user in DATA) {
//         if (DATA[user]["username"] == username) {
//             return true
//         }
//     }
//     return false
// }

// function validCredentials(username, password) {
//     for (let user in DATA) {
//         if (DATA[user]["username"] == username && DATA[user]["password"] == password) {
//             return true
//         }
//     }
//     return false
// }

// function logInUser(state, username) {
//     UserModule.logIn(username, password)
// }

const initialState = {
    username: null,
    name: null,
    age: null,
    weight: null,
    height: null,
    token: null,
}

function getUserInfo(state, username) {
    state.username = username
    state.name = UserModule.name()
    state.age = UserModule.age()
    state.weight = UserModule.weight()
    state.height = UserModule.height()
    state.token = username + "'s token"
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        logIn(state, action) {
            username = action.payload.username
            password = action.payload.password

            if(UserModule.logIn(username, password)) {
                console.log("USER LOGGED IN")
                getUserInfo(state, username)
            } else {
                console.log("LMAO YOU FAILED")
            }

        },

        signUp(state, action) {
            username = action.payload.username
            password = action.payload.password
            name = action.payload.name
            age = action.payload.age
            weight = action.payload.weight
            height = action.payload.height

            if(UserModule.signUp(username, password, name, age, weight, height)) {
                console.log("USER SIGNED IN")
                getUserInfo(state, username)
            } else {
                console.log("LMAO YOU FAILED DOOFUS")
            }
        }
    }
})

export const { logIn, signUp } = UserAuthSlice.actions
export default UserAuthSlice.reducer