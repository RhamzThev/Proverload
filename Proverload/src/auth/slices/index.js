import { NativeModules } from 'react-native';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

const { UserModule } = NativeModules;

const initialState = {
    username: null,
    name: null,
    age: null,
    weight: null,
    height: null,
    token: null,
}

async function getUserInfo(username) {

    // state.name = String(UserModule.name(username))
    // state.age = Number(UserModule.age(username))
    // state.weight = Number(UserModule.weight(username))
    // state.height = Number(UserModule.height(username))
    // state.token = username + "'s token"

    return {
        username: username,
        name: await UserModule.name(username),
        age: await UserModule.age(username),
        weight: await UserModule.weight(username),
        height: await UserModule.height(username),
        token: username + "'s token",
    }
}

export const logIn = createAsyncThunk(
    'auth/logInStatus',
    async (action, thunkAPI) => {

        console.log(action)

        var loggedIn = await UserModule.logIn(action.username, action.password)

        console.log(loggedIn)

        if(loggedIn) {
            return getUserInfo(action.username)
        }

    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // logIn(state, action) {
        //     username = action.payload.username
        //     password = action.payload.password

        //     var loggedIn = UserModule.logIn(username, password)

        //     if(loggedIn) {
        //         console.log("USER LOGGED IN")
        //         getUserInfo(state, username)

        //     } else {
        //         console.log("LMAO YOU FAILED")
        //     }

        // },

        signUp(state, action) {
            username = action.payload.username
            password = action.payload.password
            name = action.payload.name
            age = action.payload.age
            weight = action.payload.weight
            height = action.payload.height

            var signedUp = UserModule.signUp(username, password, name, Number(age), Number(weight), Number(height))

            console.log(signedUp)

            // if() {
            //     console.log("USER SIGNED IN")
            //     getUserInfo(state, username)
            // } else {
            //     console.log("LMAO YOU FAILED DOOFUS")
            // }
        }
    },
    extraReducers: {
        [logIn.fulfilled]: (state, action) => {
            state.username = action.payload.username
            state.name = action.payload.name
            state.age = action.payload.age
            state.weight = action.payload.weight
            state.height = action.payload.height
            state.token = action.payload.token
        },
    }
})

export const { signUp } = authSlice.actions
export default authSlice.reducer