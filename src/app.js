import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/visbleExpenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';

import configureStore from './store/configure';

const store = configureStore();

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


const jsx = (
    <Provider>
        <AppRouter/>
    </Provider>
)


ReactDOM.render( jsx , document.getElementById('app'));

