import { createSlice } from "@reduxjs/toolkit"

export const existingUserSlice = createSlice({
    name: 'existingUser',
    initialState: true,
    reducers: {
        setExistingUser: (state) => !state
    }
})

export const  {setExistingUser} = existingUserSlice.actions
export const existingUser = (state) => state.existingUser;
export default existingUserSlice.reducer;