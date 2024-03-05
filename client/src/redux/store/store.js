import { configureStore } from '@reduxjs/toolkit'
import screenWidthReducer from '../slices/screenWidthSlice'
import userReducer from '../slices/userSlice'

export const store = configureStore({
    reducer: {
        screenWidth: screenWidthReducer,
        user: userReducer,
    }
})