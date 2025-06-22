import React, { useEffect, useState } from "react";

const Tareas = () => {

    const [tasks, setTasks] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState("")

    useEffect(() => {
        //console.log('se cargo el componente')
        leerTareas()
    }, [])

    function leerTareas() {
        console.log('leerTareas')
        fetch('https://playground.4geeks.com/todo/users/ferbarotz')
            .then((response) => response.json())
            .then((data) => setTasks(data.todos))
    }
    function crearTareas(e) {
        e.preventDefault()
        setTasks([...tasks, nuevaTarea])
        setNuevaTarea("")
        console.log('crearTareas', nuevaTarea)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": nuevaTarea,
                "is_done": false,
            })
        };
        fetch('https://playground.4geeks.com/todo/todos/ferbarotz', requestOptions)
            .then((response) => response.json())
            .then((data) => leerTareas(data))
    }
    function eliminarTareas(idToDelete) {
        console.log('eliminarTareas' + idToDelete)
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/todos/" + idToDelete, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                console.log(result)
                leerTareas()
            })
    }

    return (
        < div style={{ backgroundColor: "lightgray", width: "30%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "2rem" }}>
                <h1>TODOS</h1>
                <form onSubmit={crearTareas} style={{ width: "100%" }}>
                    <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value) }/>
                </form>
                
                {tasks.map((task) => <p key={task.id}>{task.label}
                    <button onClick={() => eliminarTareas(task.id)}>X</button>
                </p>)}
                <p>Tienes {tasks.length} tareas pendientes</p>
            </div>
        </div>
    )
}

export default Tareas