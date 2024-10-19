import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const EditDialog = ({ editing, handleClose, expense }) => {
  return (
    <Dialog
      open={editing === undefined ? false : editing}
      onClose={handleClose}
    >
      <DialogTitle>Edit Expense</DialogTitle>
      <DialogContent>
        <ExpenseForm expense={expense} handleClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
