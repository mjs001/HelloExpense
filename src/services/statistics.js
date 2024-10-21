import axios from "axios";
import { setExpenseAmountPerCategory } from "../app/statisticsSlice";

import { determineBaseUrl } from "../utils/determineBaseUrl";

const url = determineBaseUrl();

const axiosInstance = axios.create({
  baseURL: `${url}/Statistics`,
});

export const getExpensesPerCategory = async (dispatch) => {
  try {
    const { data } = await axiosInstance.get();
    dispatch(setExpenseAmountPerCategory(data));
  } catch (err) {
    console.log(err);
  }
};
