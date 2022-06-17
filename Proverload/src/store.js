import { configureStore } from '@reduxjs/toolkit'
import {  } from './UserAuth/reducers'

export default configureStore({
  reducer: { 
    UserAuth: UserAuth 
  }
})