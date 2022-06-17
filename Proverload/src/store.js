import { configureStore } from '@reduxjs/toolkit'
import {  } from './UserCreation/reducers'

export default configureStore({
  reducer: { 
    userCreation: UserCreation 
  }
})