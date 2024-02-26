import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status:false,
  userData:null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
        state.status=true;
      state.userData = action.payload;
    },
    logoutRedux: (state) => {
      state.status =false;
      state.userData=null;
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
