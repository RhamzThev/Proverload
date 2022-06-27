import { configureStore } from '@reduxjs/toolkit'
import UserAuth from './UserAuth/slices'

export default configureStore({
  reducer: { 
    user: UserAuth 
  }
})