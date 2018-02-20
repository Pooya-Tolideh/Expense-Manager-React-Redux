import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';

const ExpenseListFilters = (props) => {
    
    const handleTextInput = (e) => props.dispatch(setTextFilter(e.target.value));
    
    const handleFilterDropdown = (e) => {
        switch(e.target.value) {
            case 'amount':
                props.dispatch(sortByAmount());
                break;
            case 'date':
                props.dispatch(sortByDate());
                break;    
        }
    };

    return (
        <div>
            <input type="text" 
                   defaultValue={props.filters.text}
                   onChange={handleTextInput}
            />
            <select name="" id="" onChange={handleFilterDropdown}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>
    )
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);