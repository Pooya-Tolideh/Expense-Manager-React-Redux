import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const mainReducer = combineReducers({
    expenses: expensesReducer(),
    filters: filtersReducer()
});

// store creation
export default () => createStore(mainReducer);