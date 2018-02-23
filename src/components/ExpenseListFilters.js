import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters';


class ExpenseListFilters extends React.Component {
    constructor(props) {
        super(props);

        const state = {}
    }

    handleTextInput = (e) => this.props.dispatch(setTextFilter(e.target.value))

    handleFilterDropdown = (e) => {
        switch(e.target.value) {
            case 'amount':
                this.props.dispatch(sortByAmount());
                break;
            case 'date':
                this.props.dispatch(sortByDate());
                break;    
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <input type="text" 
                       defaultValue={this.props.filters.text}
                       onChange={this.handleTextInput}
                />
                <select name="" id="" onChange={this.handleFilterDropdown}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                { (this.props.filters.sortBy === 'date') && <DateRangePicker/> }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);