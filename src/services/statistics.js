import axios from "axios";
import { setExpenseAmountPerCategory } from "../app/statisticsSlice";

const axiosInstance = axios.create({
  baseURL: "https://localhost:44340/Statistics",
});

export const getExpensesPerCategory = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get();
    dispatch(setExpenseAmountPerCategory(data));
  } catch (err) {
    console.log(err);
  }
};
