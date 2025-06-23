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
        <div style={{ backgroundColor: "gray", width: "30%", margin: "50px auto", padding: "20px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>


            <h1 style={{ textAlign: "center" }}>TODOS</h1>
            <form onSubmit={crearTareas} style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} style={{ backgroundColor: "white", width: "100%", padding: "8px", borderRadius: "10px", border: "3px solid #ccc" }} />
            </form>

            {tasks.map((task) => <p style={{ display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "white", padding: "10px", marginBottom: "10px" }}
                key={task.id}>{task.label}
                <button onClick={() => eliminarTareas(task.id)} style={{ backgroundColor: "white", color: "black", border: "none", }}>X</button>
            </p>)}
            <p style={{ textAlign: "center", marginTop: "20px" }}>Tienes {tasks.length} tareas pendientes</p>

        </div>
    )
}

export default Tareas