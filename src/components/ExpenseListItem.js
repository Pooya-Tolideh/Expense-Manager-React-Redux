import React from 'react';

const ExpenseListItem = (props) => {
    return (
        <li>
            <h3>{props.description}</h3>
            <p>Amount: ${props.amount}</p>
            <p>Date: {props.createdAt}</p>
        </li>
    );
}

export default ExpenseListItem;