import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { isAuthent } from "../../hooks/useFech";
import { functions } from '../../functions';
import { config } from "../../../config";
// import { ContextUser } from '../Contexts/ContextUser'
// import { isAuthent } from '../hooks/useUser'

import './auth.css'

function Login({ setData }) {

    // use navegation for nav to pages
    const nav = useNavigate();
    
    //state new user signup
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    // create new user
    const loginUser = async (data) => {
        const {email, password} = data;
        const API_URL = `${config.API_BASE_URL}users/login/`
        if(email && password){
            try {
                const response = await fetch(API_URL, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json;charset=utf-8"
                    }, 
                    body: JSON.stringify({
                        email, 
                        password
                    })
                })
                const rta = await response.json();
                if(rta.auth) {
                    const cookieOptions = {
                        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }
                    toast.success("Login success!")
                    functions.saveCookies('auth', rta.token)

                    isAuthent(setData)
                    setTimeout(() => {
                        nav('/')
                    }, 2000)

                } else {
                    toast.error("Data invalid!")
                }
            } catch (error) {
                console.error(error)
            }
        } else {
            toast.warning("Fields required!")
        }
    }
    

    // update data users on change
    const onChangeData = (e)=> {
        const name = e.target.name;
        const value = e.target.value;
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    // on onSubmit post form
    const onsubmitAction = (e) => {
        e.preventDefault();
        loginUser(userLogin);

    }

    return (
        <div className="main">
            <div className="container__form main-login">
                <picture className="main-logo">
                    <img src="https://www.svgrepo.com/show/241679/link.svg" alt="logo" />
                </picture>
                <h2 className="main-title">Login</h2>
                <form className="form-signup" onSubmit={onsubmitAction} method="post" >
                    <label>
                        <input className="input input-auth" type="email" name="email" placeholder="Email" autoFocus onChange={onChangeData} autoComplete="email"/>
                    </label>
                    <br/>
                    <label>
                        <input className="input input-auth" type="password" name="password" placeholder="Password" onChange={onChangeData}/>
                    </label>
                    <br/>
                    <button className="btn-send" >enviar</button>
                </form>
                
            </div>
        </div>
    );
}

export { Login };