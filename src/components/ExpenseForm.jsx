import { React, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { newExpense, editExpense, deleteExpense } from "../services/expenses";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import "../styles/expenses.css";

const ExpenseForm = ({ expense, handleClose }) => {
  const dispatch = useDispatch();
  const descriptions = ["Food", "Travel", "Bills", "Transportation", "Other"];
  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down("md"));
  const belowSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [expenseData, setExpenseData] = useState({
    date: dayjs().format("MM/DD/YYYY"),
    description: descriptions[0],
    amount: 0,
  });
  const [isNewExpense, setIsNewExpense] = useState(true);

  const onChange = (e, key) => {
    setExpenseData((state) => ({ ...state, [key]: e.target.value }));
  };

  const onChangeDate = (e, key) => {
    setExpenseData((state) => ({ ...state, [key]: e.format("MM/DD/YYYY") }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isNewExpense) {
      newExpense(dispatch, {
        date: expenseData.date,
        description: expenseData.description,
        amount: Number(expenseData.amount),
      });
    } else {
      editExpense(dispatch, {
        id: expense.id,
        date: expenseData.date,
        description: expenseData.description,
        amount: Number(expenseData.amount),
      });
      handleClose();
    }
  };

  useEffect(() => {
    if (expense !== undefined) {
      setIsNewExpense(false);
      setExpenseData({
        id: expense.id,
        date: expense.date,
        description: expense.description,
        amount: expense.amount,
      });
    } else {
      setIsNewExpense(true);
    }
  }, [expense]);

  const determineClasses = () => {
    if (belowMd && expense) {
      return "mobileWidthPercent";
    } else if (belowMd && !expense) {
      return "mobileWidth";
    } else {
      return "mediumWidth";
    }
  };

  return (
    <form className="newExpenseForm" onSubmit={onSubmit}>
      <FormControl
        sx={{ height: "fitContent" }}
        className={`${determineClasses()}`}
        variant="outlined"
      >
        <InputLabel>Description</InputLabel>
        <Select
          label="Description"
          value={expenseData.description}
          size="small"
          className="marginBottom10 transparent"
          onChange={(e) => onChange(e, "description")}
        >
          {descriptions.map((d) => (
            <MenuItem key={d} value={d}>
              {d}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Amount"
        type="number"
        slotProps={{
          htmlInput: {
            step: "0.01",
            min: 0,
          },
        }}
        size="small"
        className={`${determineClasses()} transparent`}
        value={expenseData.amount}
        onChange={(e) => onChange(e, "amount")}
        sx={{ marginBottom: "10px" }}
      />

      <DatePicker
        label="Date"
        value={dayjs(expenseData.date)}
        onChange={(e) => onChangeDate(e, "date")}
        className={`${determineClasses()} marginBottom10 transparent`}
        slotProps={{ textField: { size: "small" } }}
        sx={{ marginBottom: "10px" }}
      />

      <div>
        {!expense ? (
          <Button
            className={
              belowMd
                ? "mobileWidth marginBottom10 buttonColor"
                : "btnMdWidth marginBottom10 buttonColor"
            }
            sx={{ marginBottom: "10px" }}
            variant="contained"
            type="submit"
          >
            Add
          </Button>
        ) : (
          <div className="editBtnContainer">
            <Button
              className={
                belowMd
                  ? "editButtonsMobile marginBottom10 buttonColor"
                  : "btnMdWidth marginBottom10 editButtons buttonColor"
              }
              variant="contained"
              onClick={() => deleteExpense(dispatch, expense)}
            >
              Delete
            </Button>
            <Button
              className={
                belowMd
                  ? "editButtonsMobile marginBottom10 buttonColor"
                  : "btnMdWidth marginBottom10 editButtons buttonColor"
              }
              variant="contained"
              type="submit"
            >
              Save
            </Button>
            <Button
              className={
                belowMd
                  ? "editButtonsMobile marginBottom10 buttonColor"
                  : "btnMdWidth marginBottom10 editButtons buttonColor"
              }
              variant="contained"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
