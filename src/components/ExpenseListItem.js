import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    const handleRemoveBtn = () => {props.dispatch(removeExpense(props.id))};
    return (
        <li>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>
            <p>Amount: ${props.amount}</p>
            <p>Date: {props.createdAt}</p>
            <button onClick={ handleRemoveBtn }>Remove</button>
        </li>
    );
}

export default ExpenseListItem;