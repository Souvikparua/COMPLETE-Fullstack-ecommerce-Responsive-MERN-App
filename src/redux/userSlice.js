import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: "",
  firstname: "",
  lastname: "",
  email: "",
  image: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state._id = action.payload.data._id;
      state.firstname = action.payload.data.firstname;
      state.lastname = action.payload.data.lastname;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
    },
    logoutRedux: (state,action) => {
      state._id = "";
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
