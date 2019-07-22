import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>TO DO LIST</h1>
            <Link className="link" to="/">
                List
            </Link>{' '}
            |{' '}
            <Link className="link" to="/about">
                About
            </Link>
        </header>
    );
}

export default Header;
