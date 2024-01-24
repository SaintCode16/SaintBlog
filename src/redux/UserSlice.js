import { createSlice } from "@reduxjs/toolkit";
import { Api } from "./Api";

const initialState = { user: null, isAuth: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.isAuth = !!action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

// кнопка выхода, очистка localstorage
