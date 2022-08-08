import React, { useState, useEffect } from 'react'
import { Link, Navigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { config } from "../../../config";

import { Tasks } from '../../Alarma/Tasks'
import { Avatar } from '../../Avatar'
import { Loanding } from '../../Loanding'
import { Message } from "./message";
import { utils } from '../../functions'
import { ContextStateMgsProvider } from '../../contexts/context.state.mgs'

import './Home.css'



function Home({ user }) {

    const [list, setList] = useState([])

    const [stateMgs, setStateMgs] = useState('')

    const [statusHome, setStatusHome] = useState('');

    async function getTasks() {

        const API_URL = `${config.API_BASE_URL}tasks/${user.id}`

        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            const newData = utils.runAlarma(data.reverse())
            setList(newData)
            setStatusHome('ok!')
        } catch (error) {
            console.error('Ups!!! sucedio un error.', error);
            setStatusHome('error');
            toast.error('Ocurrio un error', {
                autoClose: 1500,
                pauseOnHover: false,
                hideProgressBar: true
            })
        }
    }
    
    useEffect(() => {
        getTasks();
    }, [stateMgs]);

    return (
        <>
            <ContextStateMgsProvider value={{ stateMgs, setStateMgs }}>
                <Avatar urlImg={user.avatar}/>
                {   
                    list.length > 0 ? 
                    <Tasks list={list} name={user.name}/> :
                    statusHome === "ok!" ? <Message name={user.name} message='No tienes ningun link creado'/> : 
                    statusHome === "error" ? <p className='hora'>Ups! {user.name} &#128517;, sucedio un error, recarga la pagina, por favor.</p> :<Loanding/> 
                }
            </ContextStateMgsProvider>
            <Link to='/add' className="btn btn-created">+</Link>
        </>
    );
}

export { Home };