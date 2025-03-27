import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn: (state, action) => {
      const { name, password } = action.payload;
      state.userName = name;
      state.password = password;
      state.isLoggedIn = true;
    },
  },
});
export const { setLogIn } = userSlice.actions;
export default userSlice.reducer;
