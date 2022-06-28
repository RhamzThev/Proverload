import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from './users.json'

const DATA = [
    {"username": "rozfom", "password": "test", "name": "Rhamsez", "age": 19, "weight": 225, "height": 70},
    {"username": "exampleone", "password": "test", "name": "Example One", "age": 20, "weight": 180, "height": 100},
    {"username": "exampletwo", "password": "test", "name": "Example Two", "age": 25, "weight": 250, "height": 60},
]

const initialState = {
    username: null,
    password: null,
    name: null,
    age: null,
    weight: null,
    height: null,
    token: null,
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

function logInUser(state, username) {

    for (let user in DATA) {
        if (DATA[user]["username"] == username) {
            state.username = DATA[user]["username"]
            state.password = DATA[user]["password"]
            state.name = DATA[user]["name"]
            state.age = DATA[user]["age"]
            state.weight = DATA[user]["weight"]
            state.height = DATA[user]["height"]
            state.token = username + "'s token"
        }
    }
    console.log(state)
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
                    logInUser(state, username)
                    console.log(state)
                }
                // console.log("Credentials is not valid")
            }
            // console.log("Username doesn't exist")
        }
    }
})

export const { logIn } = UserAuthSlice.actions
export default UserAuthSlice.reducer