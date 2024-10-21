import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./index";
import ToastMiddleWare from "../middlewares/toastMiddleWare";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ToastMiddleWare),
});
