import React, { useState } from 'react';
import { Progress } from './Progress';
import { config } from "../../config";
import { copyToClipBoard } from '../functions';

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

    // handle clik para copiar
    const handleClickCopied = () => {
        copyToClipBoard(url);
    }

    return (
        <div className="item">
            <a target="_blank" href={url} className="item-link" title='ir al sitio'>
                <span className="text">{name}</span>
            </a>
            {diferencia > 0 ? <Progress diferencia={diferencia}/> : null}
            <span className="time">{hora}</span>
            <span className="icon icon-copiar" onClick={handleClickCopied} title='copiar enlace'></span>
            <span className="icon icon-delete" onClick={deleteAlarma} title='eliminar'></span>
        </div>
    );
}

export {Alarma};