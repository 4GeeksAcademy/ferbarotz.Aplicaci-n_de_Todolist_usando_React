import React, { useState } from "react";

const Tareas = () => {

    const [tasks, setTasks] = useState(['make de bed', 'watch my hands', 'eat'])
    const [nuevaTarea, setNuevaTarea] = useState("")

    function addTask(e) {
        e.preventDefault()
        setTasks([...tasks, nuevaTarea])
        setNuevaTarea("")

        if (e.key === 'Enter') {
            console.log('Oprimiste ENTER')
            setTask('')
        }

    }


    function deleteTask(indexToDelete) {
        setTasks(tasks.filter((task, index) => index !== indexToDelete))

    }
    return (
        <>
            <h1 className="text-center" style={{ color: 'blue', fontSize: '32px', fontWeight: 'bold' }}>Todos</h1>
            

                <form onSubmit={addTask} style={{ display: 'flex', marginBottom: '20px', justifyContent: 'center' }}>
                    <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}
                    />
                </form>


                <ol>
                    {tasks.map((tasks, index) => <li key={index}>{tasks}</li>)}
                </ol>
        </>

    )
}

                export default Tareas