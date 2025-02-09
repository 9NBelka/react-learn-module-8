import { configureStore } from "@reduxjs/toolkit"
import tasksReducer from "./tasks/slice"
import authReducer from './auth/slice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
  }
})