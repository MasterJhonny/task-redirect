import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Message({ name, message }) {
    return (
        <div className="view">
            <br />
            <h2>{name}</h2>
            <p>{message}</p>
            <br />
            <Link className='btn btn-link' to='/add'>Create new Link</Link>
        </div>
    );
}

export {Message};