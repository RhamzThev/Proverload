import { NativeModules } from 'react-native';

import { createSlice } from '@reduxjs/toolkit'
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