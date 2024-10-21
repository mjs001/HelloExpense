import { combineReducers } from "@reduxjs/toolkit";
import expensesReducer from "./expensesSlice";
import utilitiesReducer from "./utilitiesSlice";
import statisticsReducer from "./statisticsSlice";

export const rootReducer = combineReducers({
  expensesSlice: expensesReducer,
  utilitiesSlice: utilitiesReducer,
  statisticsSlice: statisticsReducer,
});
