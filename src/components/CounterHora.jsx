import React, { useState, useRef }from 'react';
import moment from 'moment';

let hora = null;


function CounterHora({ useContainer }) {
    
    const [state, setState] = useState(0);

    hora = moment().format('HH:mm:ss');

    setTimeout(() => {
        setState(state + 1);
    }, 1000) 
    
    return (
        <div ref={useContainer} className="counter">
            <p className="hora">{hora}</p>
        </div>
    );
}

export {CounterHora};