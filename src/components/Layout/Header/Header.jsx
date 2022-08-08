import React, { useRef} from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CounterHora } from '../../CounterHora';
import { functions } from "../../functions";

import './Header.css'

function Header({ user, setData }) {

    const locateRouter = useLocation();
    const nav = useNavigate();
    const useBtn = useRef();
    const useNav = useRef();

    function onLoguot() {
        functions.deleteCookies();
        console.log('loguot!');
        setData({ auth: false });
        nav('/login');
        
    }

    function toggleMenu () {
        
        if (useBtn.current.name === 'menu') {
            useBtn.current.style.backgroundImage = 'url(https://img.icons8.com/ios-glyphs/30/FFFFFF/delete-sign.png)';
            useNav.current.style.display = 'flex';
            useBtn.current.name = 'cerrar';
        } else {
            useBtn.current.style.backgroundImage = 'url(https://img.icons8.com/sf-black/64/FFFFFF/menu.png)';
            useNav.current.style.display = 'none';
            useBtn.current.name = 'menu';
        }
    }

    return (
        <header className="header">
            <div className="header__up">
                <Link to="/" ><h2>Links</h2></Link> 
                <nav ref={useNav} className="nav">
                    {
                        user.auth ? 
                        <>
                            <button className="btn btn-link" onClick={onLoguot}>Log out</button> 
                            <Link to="/schedule" className="btn btn-link">schedule</Link> 
                        </> :
                        locateRouter.pathname === '/login' ?
                        <Link to="/register" className="btn btn-link">Register</Link> : 
                        <Link to="/login" className="btn btn-link">Login</Link>
                    }
                </nav>
                <CounterHora/>
                <button ref={useBtn} className="btn btn-menu" name='menu' onClick={toggleMenu}></button>
            </div>
        </header>
    );
}

export { Header };