import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
    
    state = {
        description : '',
        amount: '',
        note: '',
        createdAt: moment(),
        calendarFocused: false,
        error: ''
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
        // startW/at least one digit->group(period->2digits)->end
        const regEx = /^\d{1,}(\.\d{0,2})?$/;
        // allow null
        return (!amount || amount.match(regEx));
    }


    // Date Picker Methods
    //--------------------
    onDateChange = (createdAt) => {
        // only update if date picked is not null
        createdAt && 
            this.setState(() => ({createdAt}));
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    }
    
    
    // Form Submission
    // ----------------
    onFormSubmit = (e) => {
        e.preventDefault();
        const {amount, description, createdAt, note} = this.state;
        if (!amount) {
            this.setState(() => ({ error: 'ERROR: Please provide an amount' }))
        } else if (!description) {
            this.setState(() => ({ error: 'ERROR: Please provide a description' }))
        } else {
           this.props.onSubmit({
               description,
               amount: parseFloat(amount, 10) * 100,
               createdAt: createdAt.valueOf,
               note
           });
           this.props.push(`/`);
        }
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input
                    placeholder="expense description" 
                    type="text"
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
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
                {this.state.error && <p>{this.state.error}</p>}
            </form>
        );
    }
}

// export default connect(, )(ExpenseForm);