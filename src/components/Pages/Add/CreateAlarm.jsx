import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";

import { config } from "../../../config";


const API_URL = `${config.API_BASE_URL}tasks/`


function CreateAlarm({id}) {

    const [newDateAlarm, setNewDateAlarm] = useState({})

    const [days, setDays] = useState([])

    const navigation = useNavigate()


    function changeCheckboxState(e) {
        const valor = e.target;
        const day = parseInt(valor.value)

        if(!days.includes(day)) {
            days.push(day)
        } else {
            const index = days.indexOf(day)
            days.splice(index, 1)
        }
        setDays(days)
        setNewDateAlarm({
            ...newDateAlarm,
            [valor.name]: days
        })
    }


    function onChangeInputed (e) {
        const valor = e.target;   

        setNewDateAlarm({
            ...newDateAlarm,
            [valor.name]: valor.value,
            days: days

        })

    }
    
    async function hadleOnSumbit(e) {
        e.preventDefault()
        const {title, url, time, days} = newDateAlarm;
        if(title && url && time && days.length > 0) {

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify({
                    ...newDateAlarm,
                    color: 'E4AEC5',
                    userId: id
                })
            });

            await response.json()

            navigation('/')

        } else {
            console.error('faltan datos!!')
            alert('Todos los campos deben ser llegado!!')
        }
    }

    return (
        <div className="container-view">
            <div className="container__form">
                <h3>Add new alarma</h3>
                <form className="form" onSubmit={hadleOnSumbit} >
                    <span>name</span>
                    <input className='input' type="text" name='title' onChange={onChangeInputed} placeholder='Ej. Class of Marketing' autoFocus required/>
                    <br/>
                    <span>url</span>
                    <input className='input'type="text" name='url' onChange={onChangeInputed} placeholder='Ej. https//facebook.com' required/>
                    <br/>
                    <span>hora</span>
                    <label>
                        <input className='input input-time' type="time" name='time' onChange={onChangeInputed} required/>
                    </label>
                    <br/>
                    <span>dias de la semana</span>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="1" onChange={changeCheckboxState}/>
                        <span className='name-input-check' >Lunes</span>
                        <span className='back-input-check'></span>
                    </label>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="2" onChange={changeCheckboxState}/>
                        <span className='name-input-check'>Martes</span>
                        <span className='back-input-check'></span>
                    </label>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="3" onChange={changeCheckboxState}/>
                        <span className='name-input-check'>Miercoles</span>
                        <span className='back-input-check'></span>
                    </label>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="4" onChange={changeCheckboxState}/>
                        <span className='name-input-check'>Jueves</span>
                        <span className='back-input-check'></span>
                    </label>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="5" onChange={changeCheckboxState}/>
                        <span className='name-input-check'>Viernes</span>
                        <span className='back-input-check'></span>
                    </label>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="6" onChange={changeCheckboxState}/>
                        <span className='name-input-check'>Sabado</span>
                        <span className='back-input-check'></span>
                    </label>
                    <label className='input-check'>
                        <input type="checkbox" name='days' value="0" onChange={changeCheckboxState}/>
                        <span className='name-input-check'>Domingo</span>
                        <span className='back-input-check'></span>
                    </label>
                    <br/>
                    <button to='/' className='btn' >Add</button>
                </form>
            </div>

        </div>
    );
}

export {CreateAlarm};