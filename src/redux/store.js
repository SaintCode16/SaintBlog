import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./Api";

// isAuth
// GetUserData (API) беру из LS токен, получаю данные пользователя, записываю в store объект, если все норм isAuth = true, если нет false. При любом рендере страницы проверять isAuth

export const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});
