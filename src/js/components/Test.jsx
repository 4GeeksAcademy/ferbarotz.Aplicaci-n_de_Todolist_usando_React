import React from "react";

const Test = () => {

    function leerTareas() {
        console.log('leerTareas')
        fetch('https://playground.4geeks.com/todo/users/batman')
            .then((response) => response.json())
            .then((data) => console.log(data.todos))
    }

    function crearTareas() {
        console.log('crearTareas')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react",
                "is_done": false,
            })
        };
        fetch('https://playground.4geeks.com/todo/todos/batman', requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    function eliminarTareas() {
        console.log('eliminarTareas')
        const requestOptions = {
            method: "DELETE",
            redirect: "follow"
        };

        fetch("https://playground.4geeks.com/todo/todos/19", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error));

    }
    return (
        <>
            <h1>Test</h1>
            <button onClick={leerTareas}>leer Tareas</button>
            <button onClick={crearTareas}>crear Tareas</button>
            <button onClick={eliminarTareas}>eliminar Tareas</button>
        </>
    )
}

export default Test