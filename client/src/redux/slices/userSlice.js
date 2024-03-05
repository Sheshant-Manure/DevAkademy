import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userdata: null,
    isAuthenticated: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.userdata = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.userdata = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
