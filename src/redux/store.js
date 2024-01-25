import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./Api";
import { useState } from "react";
import authReducer from "./AuthSlice";
import userReducer from "./userSlice";
import favoritesReducer from "./favoritesSlice";

// isAuth
// GetUserData (API) беру из LS токен, получаю данные пользователя, записываю в store объект, если все норм isAuth = true, если нет false. При любом рендере страницы проверять isAuth

export const store = configureStore({
  reducer: {
    user: userReducer,
    [Api.reducerPath]: Api.reducer,
    favorites: favoritesReducer,
    // favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
