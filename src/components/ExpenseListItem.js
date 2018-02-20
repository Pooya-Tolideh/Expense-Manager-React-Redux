import React from 'react';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = (props) => {
    const handleRemoveBtn = () => {props.dispatch(removeExpense(props.id))};
    return (
        <li>
            <h3>{props.description}</h3>
            <p>Amount: ${props.amount}</p>
            <p>Date: {props.createdAt}</p>
            <button onClick={ handleRemoveBtn }>Remove</button>
        </li>
    );
}

export default ExpenseListItem;