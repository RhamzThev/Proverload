import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/slices'
import fitness from './fitness/slices'

export default configureStore({
  reducer: { 
    auth: auth,
    fitness: fitness
  }
})