import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
    const {id:expenseId} = props.match.params;
    return (
        <div>
            <h1>{ ` Edit expense # ${expenseId}` }</h1>
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(editExpense(expenseId, expense));
                }}
                push={props.history.push}
            />
        </div>
    );
};

export default connect()(EditExpensePage);
