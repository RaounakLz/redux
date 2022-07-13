import { configureStore } from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice/TodoSlice'

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
})
