import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  user_UID: "",
  email: "",
  firstName: "",
  lastName: "",
  phoneNo: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    signUp(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.phoneNo = action.payload.phoneNo;
    },
    login(state, action) {
      state.isAuthenticated = true;
      state.user_UID = action.payload.userCred.uid;
      state.email = action.payload.userCred.email;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user_UID = "";
      state.email = "";
      state.firstName = "";
      state.lastName = "";
      state.phoneNo = "";
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
