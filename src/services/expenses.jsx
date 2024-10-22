import axios from "axios";
import {
  setExpenses,
  createNewExpense,
  editIndividualExpense,
  deleteIndividualExpense,
  setExpensesError,
  createNewExpenseError,
  editIndividualExpenseError,
  deleteIndividualExpenseError,
} from "../app/expensesSlice";
import { determineBaseUrl } from "../utils/determineBaseUrl";

const url = `${determineBaseUrl()}Expenses`;

const axiosInstance = axios.create({
  baseURL: url,
});

export const getExpenses = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get();
    dispatch(setExpenses(data));
  } catch (err) {
    dispatch(setExpensesError());
    console.log("Error retrieving expenses.", err.response);
  }
};

export const newExpense = async (dispatch, expense) => {
  try {
    const { data } = await axiosInstance.post("", expense);
    dispatch(createNewExpense(data));
  } catch (err) {
    dispatch(createNewExpenseError());
    console.log("Error creating new expense.", err.response);
  }
};

export const editExpense = async (dispatch, expense) => {
  try {
    await axiosInstance.put("", expense);
    dispatch(editIndividualExpense(expense));
  } catch (err) {
    dispatch(editIndividualExpenseError());
    console.log("Error editing an expense.", err.response);
  }
};

export const deleteExpense = async (dispatch, expense) => {
  try {
    await axiosInstance.delete(`${url}?id=${expense.id}`);
    dispatch(deleteIndividualExpense(expense));
  } catch (err) {
    dispatch(deleteIndividualExpenseError());
    console.log("Error deleting an expense.", err.response);
  }
};
