import { createSlice } from "@reduxjs/toolkit"

export const screenWidthSlice = createSlice({
    name: 'screenWidth',
    initialState: {
        scrnWidth: window.innerWidth,
    },
    reducers: {
        updateScreenWidth: (state) => {
            state.scrnWidth = window.innerWidth;
        },
    }
})

export const  { updateScreenWidth } = screenWidthSlice.actions;
export default screenWidthSlice.reducer;