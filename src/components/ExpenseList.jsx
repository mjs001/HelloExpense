import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../services/expenses";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import EditDialog from "./EditDialog";
import { setEditing } from "../services/expenses";
import "../styles/expenses.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ExpenseForm from "./ExpenseForm";
import { current } from "@reduxjs/toolkit";
const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);
  const editing = useSelector((state) => state.expensesReducer.isEditing)[0]
    ?.isEditing;
  const theme = useTheme();
  const belowMd = useMediaQuery(theme.breakpoints.down("md"));
  const belowSm = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentExpense, setCurrentExpense] = useState(null);
  const handleOpen = (e) => {
    setCurrentExpense(e);
    setEditing(dispatch, true);
  };
  const handleClose = () => {
    setCurrentExpense(null);
    setEditing(dispatch, false);
  };

  useEffect(() => {
    getExpenses(dispatch);
  }, []);

  return (
    <div className="expensesList">
      <TableContainer component={Paper}>
        <Table size="small" aria-label="table of expenses">
          <TableHead>
            <TableRow sx={{ display: belowSm ? "none" : "table-row" }}>
              <TableCell align="left">Date</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((e) => {
              return (
                <React.Fragment key={e.id}>
                  <TableRow className={belowSm ? "tableRowSmall" : "tableRow"}>
                    <TableCell
                      component="th"
                      scope="row"
                      align={belowSm ? "center" : "left"}
                      className={belowSm ? "fullContainerWidth" : "tableRow"}
                    >
                      {e.date}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      className={belowSm ? "fullContainerWidth" : "tableRow"}
                    >
                      {e.description}
                    </TableCell>
                    <TableCell
                      align="center"
                      className={belowSm ? "fullContainerWidth" : ""}
                    >
                      ${e.amount}
                    </TableCell>
                    <TableCell
                      align="center"
                      className={belowSm ? "fullContainerWidth" : ""}
                    >
                      <Button
                        variant="contained"
                        className={belowSm ? "mobileWidth" : ""}
                        onClick={() => handleOpen(e)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    {editing && currentExpense?.id === e.id && (
                      <EditDialog
                        editing={editing}
                        handleClose={handleClose}
                        expense={currentExpense}
                      />
                    )}
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ExpenseList;
