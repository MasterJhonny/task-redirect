import React from 'react';
import { Link } from "react-router-dom";

import { CounterHora } from '../../CounterHora'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header__up">
                <Link to="/" ><h2>App Redirect</h2></Link> 
                <CounterHora/>
            </div>
        </header>
    );
}

export { Header };