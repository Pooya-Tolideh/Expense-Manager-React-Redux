// Expenses Reducer

export default () => {
    const r_stateDefault = [];
    
	return (r_state = r_stateDefault, action) => {
		switch (action.type) {
			case 'ADD_EXPENSE':
			return [...r_state, action.expense];
			case 'REMOVE_EXPENSE':
			return r_state.filter(expense => expense.id !== action.expenseId);
			case 'EDIT_EXPENSE':
			return r_state.map(expense => (expense.id === action.expenseId) ? {...expense,...action.updates} : expense);
			default:
			return r_state;
		}
	}
};