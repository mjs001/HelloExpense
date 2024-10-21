import { createSlice, createAction } from "@reduxjs/toolkit";
export const setExpensesError = createAction("setExpensesError");
export const createNewExpenseError = createAction("createNewExpenseError");
export const editIndividualExpenseError = createAction(
  "editIndividualExpenseError"
);
export const deleteIndividualExpenseError = createAction(
  "deleteIndividualExpenseError"
);
export const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    setExpenses: (state, action) => {
      return { ...state, expenses: [...action.payload] };
    },
    createNewExpense: (state, action) => {
      return { ...state, expenses: [action.payload, ...state.expenses] };
    },
    editIndividualExpense: (state, action) => {
      const updateExpense = state.expenses.map((expense) => {
        if (action.payload !== undefined) {
          if (expense.id === action.payload.id) {
            expense = action.payload;
          }
        }
        return expense;
      });
      return { ...state, expenses: [...updateExpense] };
    },
    deleteIndividualExpense: (state, action) => {
      if (action.payload !== undefined) {
        const remainingExpenses = state.expenses.filter(
          (expense) => expense.id !== action.payload.id
        );
        return { ...state, expenses: [...remainingExpenses] };
      }
    },
  },
});

export const {
  setExpenses,
  createNewExpense,
  editIndividualExpense,
  deleteIndividualExpense,
} = expensesSlice.actions;
export default expensesSlice.reducer;
