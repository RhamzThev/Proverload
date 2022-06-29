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

async function getUserInfo(state, username) {
    state.username = username

    var name = await UserModule.name(username)
    state.name = name
    // state.name = String(UserModule.name(username))
    // state.age = Number(UserModule.age(username))
    // state.weight = Number(UserModule.weight(username))
    // state.height = Number(UserModule.height(username))
    // state.token = username + "'s token"
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        logIn(state, action) {
            username = action.payload.username
            password = action.payload.password

            var loggedIn = UserModule.logIn(username, password)

            if(loggedIn) {
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

            var signedUp = UserModule.signUp(username, password, name, Number(age), Number(weight), Number(height))

            console.log(signedUp)

            // if() {
            //     console.log("USER SIGNED IN")
            //     getUserInfo(state, username)
            // } else {
            //     console.log("LMAO YOU FAILED DOOFUS")
            // }
        }
    }
})

export const { logIn, signUp } = UserAuthSlice.actions
export default UserAuthSlice.reducer