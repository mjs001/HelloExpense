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
import { setEditing } from "../services/utilities";
import "../styles/expenses.css";

import TablePagination from "@mui/material/TablePagination";

const ExpenseList = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesSlice.expenses);
  const editing = useSelector((state) => state.utilitiesSlice.isEditing)[0]
    ?.isEditing;
  const theme = useTheme();
  const belowSm = useMediaQuery(theme.breakpoints.down("sm"));
  const belowXs = useMediaQuery("(max-width: 350px)");
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
  }, [dispatch]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const paginatedExpenses = expenses.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  useEffect(() => {
    if (expenses.length > 0) {
      const totalPages = Math.ceil(expenses.length / rowsPerPage);
      if (page >= totalPages) {
        setPage(totalPages - 1);
      }
    } else {
      setPage(0);
    }
  }, [expenses, page, rowsPerPage]);

  return (
    <div className="expensesList">
      <TableContainer className="transparent hide margin" component={Paper}>
        <Table
          className="transparent"
          size="small"
          aria-label="table of expenses"
        >
          <TableHead className="tableHead">
            <TableRow
              className="transparent"
              sx={{ display: belowSm ? "none" : "table-row" }}
            >
              <TableCell align="left" className="tableHeadCells">
                Date
              </TableCell>
              <TableCell align="center" className="tableHeadCells">
                Description
              </TableCell>
              <TableCell align="center" className="tableHeadCells">
                Amount
              </TableCell>
              <TableCell align="center" className="tableHeadCells">
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedExpenses.map((e) => {
              return (
                <React.Fragment key={e.id}>
                  <TableRow className={belowSm ? "flexForMobile" : "tableRow"}>
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
                        className={
                          belowSm
                            ? "mobileWidthPercent buttonColor"
                            : "buttonColor"
                        }
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
        <TablePagination
          className="hide"
          component="div"
          count={expenses.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={belowXs ? [] : [8, 15, 25]}
          labelRowsPerPage={belowSm ? "" : "Rows per page"}
        />
      </TableContainer>
    </div>
  );
};

export default ExpenseList;
