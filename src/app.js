import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboarComponent = () => (
    <div>
        This is my dashboard
    </div>
);

const CreateComponent = () => (
    <div>
        Create here
    </div>
);
const HelpComponent = () => (
    <div>
        Get Help here
    </div>
);
const EditComponent = () => (
    <div>
        Edit here
    </div>
);

const PageNotFound = () => (
    <div>
        Page Not Found
    </div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboarComponent} exact={true}/>
            <Route path="/create" component={CreateComponent} />
            <Route path="/edit" component={EditComponent} />
            <Route path="/help" component={HelpComponent} />
            <Route component={ PageNotFound } />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render( routes , document.getElementById('app'));

