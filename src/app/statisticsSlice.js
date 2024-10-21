import { createSlice } from "@reduxjs/toolkit";

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState: {
    expenseAmountPerCategory: [],
  },
  reducers: {
    setExpenseAmountPerCategory: (state, action) => {
      return { ...state, expenseAmountPerCategory: [...action.payload] };
    },
  },
});
export const { setExpenseAmountPerCategory } = statisticsSlice.actions;
const statisticsSliceReducer = statisticsSlice.reducer;
export default statisticsSliceReducer;
