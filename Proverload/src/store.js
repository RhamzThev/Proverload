import { configureStore } from '@reduxjs/toolkit'
import auth from './auth/slices'

export default configureStore({
  reducer: { 
    auth: auth
    fitness: fitness
  }
})