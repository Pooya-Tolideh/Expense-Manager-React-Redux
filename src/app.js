import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import 'normalize.css/normalize.css';
import './styles/style.scss';

import configureStore from './store/configure';

const store = configureStore();


import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/visbleExpenses';

store.subscribe(() => {
    const state = store.getState();
    console.table(
        getVisibleExpenses(state)
    );
});

store.dispatch(addExpense({
    description: 'car wash',
    amount: 20
}));

store.dispatch(addExpense({
    description: 'home repair',
    amount: 40
}));

store.dispatch(setTextFilter('car'));


ReactDOM.render( <AppRouter/> , document.getElementById('app'));

