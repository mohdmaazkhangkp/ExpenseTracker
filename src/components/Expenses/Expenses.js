import React, { useState } from "react";
import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  const filteredExpenses = props.items.filter(elem => elem.date.getFullYear().toString() === filteredYear);

 
  return (
    <Cards className="expenses">
      <ExpensesFilter
        selectedDefault={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <ExpensesList items={filteredExpenses}></ExpensesList>
    </Cards>
  );
}
export default Expenses;
