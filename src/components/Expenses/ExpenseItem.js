import React from 'react';
import "./ExpenseItem.css";
import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props){  
                                                                                                  
    return(
        <li>
        <Cards className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Cards>
        </li>
    );
}
export default ExpenseItem;