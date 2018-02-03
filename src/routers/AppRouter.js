import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { ExpenseDashboarComponent, EditComponent, HelpComponent, CreateComponent, PageNotFound, Header } from './temp.pageComponents';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboarComponent} exact={true}/>
                <Route path="/create" component={CreateComponent} />
                <Route path="/edit" component={EditComponent} />
                <Route path="/help" component={HelpComponent} />
                <Route component={ PageNotFound } />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;

