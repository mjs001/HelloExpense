const initialState = {
  expenses: [],
  isEditing: false,
};

export const ActionTypes = {
  SET_EXPENSES: "SET_EXPENSES",
  NEW_EXPENSE: "NEW_EXPENSE",
  IS_EDITING: "IS_EDITING",
  EDIT_EXPENSE: "EDIT_EXPENSE",
  DELETE_EXPENSE: "DELETE_EXPENSE",
};

export const ActionCreators = {
  setExpenses: (payload) => ({ type: ActionTypes.SET_EXPENSES, payload }),
  newExpense: (payload) => ({ type: ActionTypes.NEW_EXPENSE, payload }),
  isEditing: (payload) => ({ type: ActionTypes.IS_EDITING, payload }),
  editExpense: (payload) => ({ type: ActionTypes.EDIT_EXPENSE, payload }),
  deleteExpense: (payload) => ({ type: ActionTypes.DELETE_EXPENSE, payload }),
};

const expensesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_EXPENSES:
      return { ...state, expenses: [...action.payload] };
    case ActionTypes.NEW_EXPENSE:
      return { ...state, expenses: [action.payload, ...state.expenses] };
    case ActionTypes.IS_EDITING:
      return { ...state, isEditing: [action.payload] };
    case ActionTypes.EDIT_EXPENSE:
      let updateExpense = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          expense = action.payload;
        }
        return expense;
      });
      return { ...state, expenses: [...updateExpense] };
    case ActionTypes.DELETE_EXPENSE:
      let leftOverExpenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id
      );
      return { ...state, expenses: [...leftOverExpenses] };
    default:
      return state;
  }
};

export default expensesReducer;
