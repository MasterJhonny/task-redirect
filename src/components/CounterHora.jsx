import React, { useState }from 'react';
import moment from 'moment';


function CounterHora() {
    
    const [hora, setHora] = useState('');
    
    function runHora() {
        const valor = moment().format('HH:mm:ss')
        setHora(valor)
    }
    
    setInterval(runHora, 1000)

    return (
        <React.Fragment>
            <div className="counter">
                <p>{hora}</p>
            </div>
            <span className="back-coonter"></span>
        </React.Fragment>
    );
}

export {CounterHora};