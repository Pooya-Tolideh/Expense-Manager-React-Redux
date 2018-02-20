import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisbileExpenses from '../selectors/visbleExpenses'

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <ul>{ 
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        }</ul>
    </div>
);


const mapStatetoProps = (state) => ({
    expenses: getVisbileExpenses(state)
});


export default connect(mapStatetoProps)(ExpenseList);
