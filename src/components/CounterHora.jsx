import React, { useState }from 'react';
import moment from 'moment';

let hora = null;


function CounterHora() {
    
    const [state, setState] = useState(0);

    hora = moment().format('HH:mm:ss');

    setTimeout(() => {
        setState(state + 1);
    }, 1000) 
    
    return (
        <React.Fragment>
            <div className="counter">
                <p className="hora">{hora}</p>
            </div>
            <span className="back-coonter"></span>
        </React.Fragment>
    );
}

export {CounterHora};