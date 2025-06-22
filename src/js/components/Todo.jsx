import React, { useEffect, useState } from "react";

const Todo = () => {

    const [villanos, setVillanos] = useState(['joker', 'joker', 'dr octupos', 'pinguino', 'enigma', 'picoro'])
    //como se define una variable con memoria
    //const[nombre de la variable, funcion que modifica la variable]= useState(valor inicial de la variable)
    const [tareas, setTareas] = useState([])

    useEffect(()=>{
        console.log('se cargo el componente')
        leerTareas()
    },[])

    function leerTareas() {
        console.log('leerTareas')
        fetch('https://playground.4geeks.com/todo/users/superman')
            .then((response) => response.json())
            .then((data) => setTareas(data.todos))
            //.then((data) => console.log(data.todos))
    }

    function agregarVillano() {
        console.log('agregarVillano')
        console.log(villanos)
        //villano.push('dos caras')
        //villanos¨=[]
        setVillanos([...villanos, 'dos caras'])
        console.log(villanos)
    }

    return (
        <>
            <h1>Todos</h1>
            <button onClick={leerTareas}>leer tareas</button>
            <h3>Tareas de superman</h3>
            {tareas.map((tarea) => <p key={tarea.id}>tarea {tarea.id} :{tarea.label}</p>)}
            <h3>Villanos</h3>
            {villanos.map((villano, index) => <p key={index}>Villano {index}: {villano}</p>)}
            <button onClick={agregarVillano}>agregar villano</button>

        </>
    )

}
export default Todo