import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const mainReducer = combineReducers({
    expenses: expensesReducer(),
    filters: filtersReducer()
});

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// store creation
export default () => createStore(mainReducer, reduxDevTools);