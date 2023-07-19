import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => (
    <nav>
        <h1>Steam Shop</h1>
        <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/basket">Basket</Link></li>
        </ul>
    </nav>
);

export default Navigation;