        import React, {useState} from "react";

        const Tareas = ()=>{

            const [tasks, setTasks] = useState(['make de bed','watch my hands','eat'])
            const [nuevaTarea, setNuevaTarea] = useState("")

            function addTask(e){
                e.preventDefault()
                setTasks([...tasks, nuevaTarea])
                setNuevaTarea("")  

                 if (e.key === 'Enter') {
            console.log('Oprimiste ENTER')
            setTask('') 
        }
            
            }
      
         
            
            function deleteTask(indexToDelete){
                setTasks(tasks.filter((task,index) => index !== indexToDelete))

            }
            return(
                <>
                        <h1>Tareas</h1>
                    <div>
                         
                            <form onSubmit={addTask} style={{ display: 'flex',  marginBottom: '20px'}}>
                            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}
                            />
                            </form>

                        <h1>Tareas</h1>
                        <ol>
                            {tasks.map((task, index)=> <li key={index}>{task}
                                <button onClick={()=>deleteTask(index)}  style={{backgroundColor: 'white', color: 'gris',  border: 'none'}}>X</button>
                            </li>)}
                            
                        </ol>
                         
                       
            </div>
                    


                    <p>Tienes {tasks.length} tareas pendientes</p>
                </>
            )
        }

    export default Tareas