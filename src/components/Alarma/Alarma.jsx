import React, { useState } from 'react';
import { Progress } from './Progress';
import { config } from "../../config";

import './Alarma.css'

function Alarma({ id, name, url, hora, diferencia, tasks, setTasks}) {

    async function deleteAlarma() {

        const valor = confirm(`Deleted Redirect ${name}`)

        if(valor) {

            const API_URL = `${config.API_BASE_URL}tasks/${id}`
            const response = await fetch(API_URL, {
                method: 'DELETE'
            })
            await response.json()
    
            const newTasks = tasks.filter(task => {
                if(task.id !== id) {
                    return task;
                }
            })
            setTasks(newTasks)
        } 
    }

    return (
        <div className="item">
            <a target="_blank" href={url} className="item-link">
                <span className="text">{name}</span>
            </a>
            {diferencia > 0 ? <Progress diferencia={diferencia}/> : null}
            <span className="time">{hora}</span>
            <span className="icon icon-delete" onClick={deleteAlarma}></span>
        </div>
    );
}

export {Alarma};