// Gets expenses that match the filter criteria

const getVisbleExpenses = ({expenses, filters } = {}) => {
	const { text, startDate, endDate, sortBy } = filters;

	return expenses.filter(expense => {
		const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
		return startDateMatch && endDateMatch && textMatch;
	}).sort((prevExp,nextExp) => {
		switch(sortBy) {
			case 'amount':
				return prevExp.amount > nextExp.amount ? -1 : 1;
			case 'date':
				return prevExp.createdAt > nextExp.createdAt ? -1 : 1;
			default: 
				break;
		}
	});

	return expenses;
}

export default getVisbleExpenses;
