import {
  createNewExpense,
  editIndividualExpense,
  deleteIndividualExpense,
  setExpensesError,
  createNewExpenseError,
  editIndividualExpenseError,
  deleteIndividualExpenseError,
} from "../app/expensesSlice";
import { toast } from "react-toastify";

const ToastMiddleWare = () => (next) => (action) => {
  switch (action.type) {
    case createNewExpense.type:
      toast.success("New expense added successfully");
      break;
    case editIndividualExpense.type:
      toast.success("Expense edited successfully");
      break;
    case deleteIndividualExpense.type:
      toast.success("Expense deleted successfully");
      break;
    case setExpensesError.type:
      toast.error("Error loading expenses");
      break;
    case createNewExpenseError.type:
      toast.error("Error adding new expense");
      break;
    case editIndividualExpenseError.type:
      toast.error("Error editing expense");
      break;
    case deleteIndividualExpenseError.type:
      toast.error("Error deleting expense");
      break;
    default:
      break;
  }
  return next(action);
};

export default ToastMiddleWare;
