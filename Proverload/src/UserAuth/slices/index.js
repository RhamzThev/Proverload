import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    age: 0,
    weight: 0,
    height: 0,
}

const UserAuthSlice = createSlice({
    name: "UserAuth",
    initialState,
    reducers: {
        createUser(state) {
            
        }
    }
})