import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboarComponent} exact={true}/>
            <Route path="/create" component={CreateComponent} />
            <Route path="/edit" component={EditComponent} />
            <Route path="/help" component={HelpComponent} />
        </div>
    </BrowserRouter>
);

ReactDOM.render( routes , document.getElementById('app'));

