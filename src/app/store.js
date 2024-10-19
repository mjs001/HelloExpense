import { configureStore } from "@reduxjs/toolkit";
import expensesReducer from "./expensesReducer";

export const store = configureStore({
  reducer: {
    expensesReducer: expensesReducer,
  },
});
