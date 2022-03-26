import React, { useState, useEffect } from 'react'

import { Alarma } from './Alarma'

function Tasks({ list }) {

    const [tasks, setTasks] = useState(list)

    useEffect(() => {
        setTasks(list)
    }, [list])

    return (
        <section className="view">
            <h2>Hi, Jhonny! &#128522;</h2>
            {tasks.map(item => (
                <Alarma
                    key={item.id}
                    id={item.id}
                    name={item.title}
                    url={item.url}
                    hora={item.time}
                    diferencia={item.diferencia}
                    tasks={tasks}
                    setTasks={setTasks}
                />    
            ))}
        </section>
    );
}

export {Tasks};