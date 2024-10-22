import ExpenseList from "./components/ExpenseList";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ExpenseForm from "./components/ExpenseForm";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import { ToastContainer } from "react-toastify";
import DoughnutChart from "./components/DoughnutChart";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/customTheme";
import "./App.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ToastContainer limit={1} autoClose={2000} />
          <Box sx={{ flexGrow: 1 }}>
            <h1>HelloExpense</h1>
            <Grid container>
              <Grid size={{ xs: 12, sm: 12, md: 4 }}>
                <Paper className="paper glass">
                  <h2>New Expense</h2>
                  <ExpenseForm />
                </Paper>
                <Paper className="paper doughnut glass">
                  <DoughnutChart />
                </Paper>
              </Grid>
              <Grid size={{ xs: 12, sm: 12, md: 8 }}>
                <Paper className="paper glass paddingBtm marginLR">
                  <h2>Expenses</h2>
                  <ExpenseList />
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </div>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
