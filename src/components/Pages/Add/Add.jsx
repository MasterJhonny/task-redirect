import React from 'react';
import { Link } from "react-router-dom";

import { CreateAlarm } from './CreateAlarm'

import './Add.css'

function Add({ user }) {
    return (
        <React.Fragment>
            <section className="view">
                <CreateAlarm id={user.id} />
            </section>
            <Link className="btn btn-back" to='/'></Link>
        </React.Fragment>
        
    );
}

export {Add};