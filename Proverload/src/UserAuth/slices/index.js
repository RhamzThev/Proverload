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

const initialState = {
    username: ""
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        logIn(username, password) {
            
        }
    }
})
