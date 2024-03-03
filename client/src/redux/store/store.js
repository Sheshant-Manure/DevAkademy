import { configureStore } from '@reduxjs/toolkit'
import screenWidthReducer from '../slices/screenWidthSlice'
import authReducer from '../slices/authSlice'

export const store = configureStore({
    reducer: {
        screenWidth: screenWidthReducer,
        auth: authReducer,
    }
})