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

        var loggedIn = await UserModule.logIn(action.username, action.password)

        console.log(loggedIn)

        if(loggedIn) {
            return getUserInfo(action.username)
        }

    }
)

export const signUp = createAsyncThunk(
    'auth/signUpStatus',
    async (action, thunkAPI) => {

        var signedUp = await UserModule.signUp(action.username, action.password, action.name, Number(action.age), Number(action.weight), Number(action.height))

        console.log(signedUp)

        if(signedUp) {
            return getUserInfo(action.username)
        }

    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOut(state) {
            state.token = null
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
        [signUp.fulfilled]: (state, action) => {
            state.username = action.payload.username
            state.name = action.payload.name
            state.age = action.payload.age
            state.weight = action.payload.weight
            state.height = action.payload.height
            state.token = action.payload.token
        }
    }
})

export const { signOut } = authSlice.actions
export default authSlice.reducer