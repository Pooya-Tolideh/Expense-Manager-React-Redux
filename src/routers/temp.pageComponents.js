import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
        404 - Page Not Found <br />
        <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <nav>
            <ul>
                <li><NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink></li>
                <li><NavLink to="/create" activeClassName="is-active" >Create Expenses</NavLink></li>
                <li><NavLink to="/edit" activeClassName="is-active" >Edit Expenses</NavLink></li>
                <li><NavLink to="/help" activeClassName="is-active" >Help</NavLink></li>
            </ul>
        </nav>
    </header>
);


export { ExpenseDashboarComponent, EditComponent, HelpComponent, CreateComponent, PageNotFound, Header }