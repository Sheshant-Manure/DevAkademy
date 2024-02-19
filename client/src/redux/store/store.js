import { configureStore } from '@reduxjs/toolkit'
import screenWidthReducer from '../slices/screenWidthSlice'

export const store = configureStore({
    reducer: {
        screenWidth: screenWidthReducer
    }
})