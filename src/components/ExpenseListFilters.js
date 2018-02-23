import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {DateRangePicker} from 'react-dates';
import { 
    setTextFilter, 
    sortByAmount, 
    sortByDate, 
    setStartDate, 
    setEndDate 
} from '../actions/filters';


class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
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

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}));
    }

    render() {
        const {filters} = this.props;
        return (
            <div>
                <input type="text" 
                       defaultValue={filters.text}
                       onChange={this.handleTextInput}
                />
                <select name="" id="" onChange={this.handleFilterDropdown}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                  startDate={filters.startDate}
                  endDate={filters.endDate}
                  onDatesChange={this.onDatesChange}
                  focusedInput={this.state.calendarFocused}
                  onFocusChange={this.onFocusChange}
                  showClearDates={true}
                  numberOfMonths={1}
                  isOutsideRange={()=>false}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseListFilters);