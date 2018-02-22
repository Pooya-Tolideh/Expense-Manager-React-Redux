import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    return (
        <li>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>
            <p>Amount: ${props.amount}</p>
            <p>Date: {props.createdAt}</p>
        </li>
    );
}

export default ExpenseListItem;