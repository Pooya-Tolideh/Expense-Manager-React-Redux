import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters';

const ExpenseListFilters = (props) => {
    
    const handleTextInput = (e) => props.dispatch(setTextFilter(e.target.value));

    return (
        <div>
            <input type="text" 
                   defaultValue={props.filters.text}
                   onChange={handleTextInput}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);