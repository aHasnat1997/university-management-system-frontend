import { createSlice } from "@reduxjs/toolkit";

type TUserInfo = {
  id: null | string,
  email: null | string,
  role: null | string
}

const initialState: TUserInfo = {
  id: null,
  email: null,
  role: null
}

export const authSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, role } = action.payload;
      state.id = id;
      state.email = email;
      state.role = role;
    },
    logOut: (state) => {
      state.id = null;
      state.email = null;
      state.role = null;
    }
  }
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
