import React, { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";

import { Tasks } from '../../Alarma/Tasks'
import { Avatar } from '../../Avatar'
import { Loanding } from '../../Loanding'
import { utils } from '../../functions'
import { ContextStateMgsProvider } from '../../contexts/context.state.mgs'

import './Home.css'

const API_URL = 'https://back-task-redirect.herokuapp.com/api/v1/tasks'

function Home() {

    const [list, setList] = useState([])

    const [stateMgs, setStateMgs] = useState('')

    async function getTasks() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            const newData = utils.runAlarma(data.reverse())
            setList(newData)
        } catch (error) {
            console.error('Ups!!! sucedio un error.', error)
        }
    }
    
    useEffect(() => {
        
        getTasks();

    }, [stateMgs]);

    return (
        <React.Fragment>
            <ContextStateMgsProvider value={{ stateMgs, setStateMgs }}>
            <Avatar/>
            {list.length > 0 ? <Tasks list={list}/> : <Loanding/>}
            </ContextStateMgsProvider>
            <Link to='/add' className="btn btn-created">+</Link>
        </React.Fragment>
    );
}

export { Home };