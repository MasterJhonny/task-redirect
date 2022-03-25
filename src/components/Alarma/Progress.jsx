import React, { useState, useContext } from 'react'

import { ContextStateMgs } from  '../contexts/context.state.mgs'

function Progress({ diferencia }) {

    const { stateMgs, setStateMgs } = useContext(ContextStateMgs)

    setTimeout(() => {
        setStateMgs('llego la hora de la actividad!')
    }, diferencia)

    return (
        <div className="progress progress-div">
            <div className="progress progress-precent" style={{ animationDuration: `${diferencia/1000}s`}} />
        </div>
    );
}

export {Progress};