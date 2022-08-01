import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { CounterHora } from '../../CounterHora';
import { functions } from "../../functions";

import './Header.css'

function Header({ user, setData }) {

    const locateRouter = useLocation();

    function onLoguot() {
        functions.deleteCookies();
        console.log('loguot!');

        setData({ auth: false })
        
    }

    return (
        <header className="header">
            <div className="header__up">
                <Link to="/" ><h2>App Redirect</h2></Link> 
                <CounterHora/>
                {
                    user.auth ? 
                    <button className="btn btn-link" onClick={onLoguot}>Log out</button> : 
                    locateRouter.pathname === '/login' ?
                    <Link to="/register" className="btn btn-link">Register</Link> : 
                    <Link to="/login" className="btn btn-link">Login</Link>
                }
            </div>
        </header>
    );
}

export { Header };