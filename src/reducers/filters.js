// Filters Reducer

import moment from 'moment';

export default () => {
	const r_stateDefault = {
		text: '',
		sortBy: 'data',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	return (r_state = r_stateDefault, action) => {
		switch (action.type) {
			case 'SET_TEXT':
			return {...r_state, text: action.filterText}
			case 'SORT_BY_AMOUNT':
				return {...r_state, sortBy: 'amount'};
			case 'SORT_BY_DATE':
				return {...r_state, sortBy: 'date'};
			case 'SET_START_DATE':
				return {...r_state, startDate: action.startDate};
			case 'SET_END_DATE':
				return {...r_state, endDate: action.endDate};
			default: return r_state;
		}
	}
};