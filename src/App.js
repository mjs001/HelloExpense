import ExpenseList from "./components/ExpenseList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpenseForm from "../src/components/ExpenseForm";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";

import "./App.css";
function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <h1>HelloExpense</h1>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 3 }}>
              <Paper>
                <h3>New Expense</h3>
                <ExpenseForm />
              </Paper>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }}>
              <Paper>
                <h3>Expenses</h3>
                <ExpenseList />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </div>
    </LocalizationProvider>
  );
}

export default App;
