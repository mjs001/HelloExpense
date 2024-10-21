import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { getExpensesPerCategory } from "../services/statistics";
import { useEffect, useState } from "react";
import "../styles/doughnutChart.css";

const DoughnutChart = () => {
  const dispatch = useDispatch();
  const expenseAmountPerCategory = useSelector(
    (state) => state.statisticsSlice.expenseAmountPerCategory
  );

  const expenses = useSelector((state) => state.expensesSlice.expenses);

  const [doughnut, setDoughnut] = useState({
    labels: [],
    data: [],
  });

  useEffect(() => {
    getExpensesPerCategory(dispatch);
  }, [expenses]);

  useEffect(() => {
    setDoughnut({
      labels: expenseAmountPerCategory.map((x) => x.key),
      data: expenseAmountPerCategory.map((x) => x.value),
    });
  }, [expenseAmountPerCategory]);

  const data = {
    labels: doughnut.labels,
    datasets: [
      {
        data: doughnut.data,
        backgroundColor: [
          "#DFFF00",
          "#FFBF00",
          "#FF7F50",
          "#DE3163",
          "#FF0000",
          "#40E0D0",
          "#6495ED",
          "#CCCCFF",
          "#9370DB",
          "#000080",
        ],
      },
    ],
  };
  return (
    <div hidden={!expenseAmountPerCategory || !expenseAmountPerCategory.length}>
      <h2>Expenses Per Category</h2>
      <Doughnut data={data} className="doughnutChartContainer" />
    </div>
  );
};

export default DoughnutChart;
