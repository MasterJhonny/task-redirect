import React from 'react';
import { Link } from "react-router-dom";

import { CreateAlarm } from './CreateAlarm'

import './Add.css'

function Add() {
    return (
        <React.Fragment>
            <section className="view">
                <CreateAlarm/>
            </section>
            <Link className="btn btn-back" to='/'></Link>
        </React.Fragment>
        
    );
}

export {Add};