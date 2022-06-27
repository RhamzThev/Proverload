import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from './users.json'

// const { UserModule } = NativeModules;

// var getUsername = async () => {
//     try { return await AsyncStorage.getItem('@username') }
//     catch(e) { console.console.error();("error.") }
// }

// var setUsername = async (value) => {
//     try { return await AsyncStorage.setItem('@username', value) }
//     catch(e) { console.console.error();("error.") }
// }

// var getAge = async () => {
//     try { return await AsyncStorage.getItem('@age') }
//     catch(e) { console.console.error();("error.") }
// }

// var setAge = async (value) => {
//     try { return await AsyncStorage.setItem('@age', value) }
//     catch(e) { console.console.error();("error.") }
// }

// var getWeight = async () => {
//     try { return await AsyncStorage.getItem('@weight') }
//     catch(e) { console.console.error();("error.") }
// }

// var setWeight = async (value) => {
//     try { return await AsyncStorage.setItem('@weight', value) }
//     catch(e) { console.console.error();("error.") }
// }

// var getHeight = async () => {
//     try { return await AsyncStorage.getItem('@height') }
//     catch(e) { console.console.error();("error.") }
// }

// var setHeight = async (value) => {
//     try { return await AsyncStorage.setItem('@height', value) }
//     catch(e) { console.console.error();("error.") }
// }

const DATA = [
    {"username": "rozfom", "password": "test"},
    {"username": "example", "password": "test"},
    {"username": "exampletwo", "password": "test"},
]

const initialState = {
    username: "",
    password: ""
}

function usernameExists(username) {
    for (let user in DATA) {
        if (DATA[user]["username"] == username) {
            return true
        }
    }
    return false
}

function validCredentials(username, password) {
    for (let user in DATA) {
        if (DATA[user]["username"] == username && DATA[user]["password"] == password) {
            return true
        }
    }
    return false
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        logIn(state, action) {
            username = action.payload.username
            password = action.payload.password
            if (usernameExists(username)) {
                if (validCredentials(username, password)) {
                    console.log("Log in successful")
                    state.username = username
                    state.password = password
                }
                console.log("Credentials is not valid")
            }
            console.log("Username doesn't exist")
        }
    }
})

export const { logIn } = UserAuthSlice.actions
export default UserAuthSlice.reducer