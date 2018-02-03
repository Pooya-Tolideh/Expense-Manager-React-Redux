import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        404 - Page Not Found <br />
        <Link to="/">Go Home</Link>
    </div>
);

export default PageNotFound;