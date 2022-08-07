import React, { useState } from 'react';


const url = 'https://i.postimg.cc/3rsgdFmY/horario.jpg';

function Schedule() {
    return (
        <div className="main main-schedule">
          <h2>This is my Schedule</h2>
          <picture className='img-container img-container-schedule'>
            <img className="img-schedule" src={url} alt="image from horario" />  
          </picture>
        </div>
    );
}

export {Schedule};