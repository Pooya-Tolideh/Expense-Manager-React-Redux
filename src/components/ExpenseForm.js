import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now = moment();
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
    
    state = {
        description : '',
        amount: 0,
        note: '',
        createdAt: moment(),
        calendarFocused: false
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        this.isValidAmount(amount) && 
            this.setState(() => ({amount}));
    }

    isValidAmount = (amount) => {
        const regEx = /^\d*(\.\d{0,2})?$/;
        return amount.match(regEx);
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}));
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }   

    render() {
        return (
            <div>
                <input

                    placeholder="expense description" 
                    type="text"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="number"
                    placeholder="amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false }
                />
                <textarea 
                    cols="30" rows="10" 
                    placeholder="Add a note"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <button>Add Expense</button>

            </div>
        );
    }
}

// export default connect(, )(ExpenseForm);