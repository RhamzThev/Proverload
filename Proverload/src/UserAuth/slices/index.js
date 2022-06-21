import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';
import users from './users.json'

const { UserModule } = NativeModules;

var getUsername = async () => {
    try { return await AsyncStorage.getItem('@username') }
    catch(e) { console.console.error();("error.") }
}

var setUsername = async (value) => {
    try { return await AsyncStorage.setItem('@username', value) }
    catch(e) { console.console.error();("error.") }
}

var getAge = async () => {
    try { return await AsyncStorage.getItem('@age') }
    catch(e) { console.console.error();("error.") }
}

var setAge = async (value) => {
    try { return await AsyncStorage.setItem('@age', value) }
    catch(e) { console.console.error();("error.") }
}

var getWeight = async () => {
    try { return await AsyncStorage.getItem('@weight') }
    catch(e) { console.console.error();("error.") }
}

var setWeight = async (value) => {
    try { return await AsyncStorage.setItem('@weight', value) }
    catch(e) { console.console.error();("error.") }
}

var getHeight = async () => {
    try { return await AsyncStorage.getItem('@height') }
    catch(e) { console.console.error();("error.") }
}

var setHeight = async (value) => {
    try { return await AsyncStorage.setItem('@height', value) }
    catch(e) { console.console.error();("error.") }
}

const initialState = {
    name: getUsername(),
    age: getAge(),
    weight: getWeight(),
    height: getHeight(),
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        init() {
            // if storage not null, go to main page
            if (getUsername() !== null){
                
            } else {

            }
        }

        createUser(state) {
            var userCreated = UserModule.createUser(
                state.name,
                state.password,
                state.age,
                state.weight,
                state.height
            )
        }
    }
})

export const { init, createUser } = UserAuth.actions
export default UserAuth.reducer