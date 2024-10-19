import { ActionCreators } from "../app/expensesReducer";
export const getExpenses = async (dispatch) => {
  try {
    const expenses = [
      { id: 1, date: "10/18/2024", description: "Groceries", amount: 125.42 },
      { id: 2, date: "10/18/2024", description: "Gas", amount: 32.12 },
      { id: 3, date: "10/19/2024", description: "Car Payment", amount: 516.15 },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch (err) {
    console.log("Error inside getExpenses", err);
  }
};

export const newExpense = async (dispatch, expense) => {
  try {
    dispatch(
      ActionCreators.newExpense({
        id: 10,
        date: expense.date,
        description: expense.description,
        amount: expense.amount,
      })
    );
  } catch (err) {
    console.log("Error inside newExpense", err);
  }
};

export const setEditing = async (dispatch, editing) => {
  try {
    dispatch(ActionCreators.isEditing({ isEditing: editing }));
  } catch (err) {
    console.log("Error inside isEditing", err);
  }
};

export const editExpense = async (dispatch, expense) => {
  try {
    dispatch(ActionCreators.editExpense(expense));
  } catch (err) {
    console.log("Error inside editExpense", err);
  }
};

export const deleteExpense = async (dispatch, expense) => {
  try {
    dispatch(ActionCreators.deleteExpense(expense));
  } catch (err) {
    console.log("Error inside deleteExpense", err);
  }
};
