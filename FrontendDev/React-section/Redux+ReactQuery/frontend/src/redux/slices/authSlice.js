import { createSlice } from "@reduxjs/toolkit";

//Intiiate state

const authSlice = createSlice({
  //Init state
  name: "auth",
  initialState: {
    users: null,
  },

  reducers: {
    //login
    loginAction: (state, action) => {
      state.users = action.payload;
    },

    //logout
    logoutAction: (state, action) => {
      state.users = null;
    },
  },
});

//generate the actions
export const { loginAction, logoutAction } = authSlice.actions;

//!Generate reducers
const authReducer = authSlice.reducer;

export default authReducer;
