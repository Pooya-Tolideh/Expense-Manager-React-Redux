import uuid from 'uuid';

// ADD EXPENSE
export const addExpense = ({
	description = '',
	note = '',
	amount = '',
	createdAt = 0
} = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt
	}
});


// REMOVE EXPENSE   
export const removeExpense = (expenseId) => ({
	type: 'REMOVE_EXPENSE',
	expenseId
});



// EDIT EXPENSE
export const editExpense = (expenseId, updates) => ({
	type: 'EDIT_EXPENSE',
	expenseId,
	updates
});