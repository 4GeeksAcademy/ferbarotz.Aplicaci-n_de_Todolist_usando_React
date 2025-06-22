        import React, {useState} from "react";

        const Tareas = ()=>{

            const [tasks, setTasks] = useState(['make de bed','watch my hands','eat'])

            //const tasks = ['make de bed','watch my hands','eat']
            let nuevaTarea = 'study'

            function addTask(){
                //console.log('addTask')
                //console.log(tasks)
                //tasks.push(nuevaTarea)
                //console.log(tasks)
                setTasks([...tasks, nuevaTarea])        
            }
            
            function deleteTask(){
                setTasks(tasks.filter((task) => task == 'pepe'))

            }
            return(
                <>
                    <h1>Tareas</h1>
                    <div>
                        <ol>
                            {tasks.map((task, index)=> <li key={index}>{task}</li>)}
                            
                        </ol>
                        <button onClick={addTask}>Agregar tarea</button>
                    </div>
                    <div>
                        <button onClick={deleteTask}>Eliminar tareas</button>
                    </div>


                    <p>Tienes {tasks.length} tareas pendientes</p>
                </>
            )
        }

    export default Tareas