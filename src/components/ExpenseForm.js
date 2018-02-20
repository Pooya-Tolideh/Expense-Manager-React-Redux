import React from 'react';

export default class ExpenseForm extends React.Component {
    
    state = {
        description : '',
        amount: 0,
        note: ''
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