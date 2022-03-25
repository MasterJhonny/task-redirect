import React, { useState } from 'react'

const ContextStateMgs = React.createContext('');

function ContextStateMgsProvider ({ children, value }) {
    
    return (
        <ContextStateMgs.Provider value={value}>
            {children}
        </ContextStateMgs.Provider>
    )
}

export { ContextStateMgs, ContextStateMgsProvider};