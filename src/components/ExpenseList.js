import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        <p>{ props.filters.text }</p>
        <ul>{ 
            props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        }</ul>
    </div>
);


const mapStatetoProps = (state) => ({
    expenses: state.expenses,
    filters: state.filters
});


export default connect(mapStatetoProps)(ExpenseList);
