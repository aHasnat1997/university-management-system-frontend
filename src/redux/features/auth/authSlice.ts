import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
  name: 'userInfo',
  initialState: {},
  reducers: {
    setUser: (state, action) => {
      state = action.payload
    }
  }
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
