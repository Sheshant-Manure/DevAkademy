import { configureStore } from '@reduxjs/toolkit'
import existingUserReducer from '../slices/existingUserSlice'

export const store = configureStore({
    reducer: {
        existingUserReducer
    }
})