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
                        <h1 className="text-center" style={{ color: 'blue', fontSize: '32px', fontWeight: 'bold' }}>Todos</h1>
                    <div>
                         
                            <form onSubmit={addTask}  style={{ display: 'flex',  marginBottom: '20px',  justifyContent: 'center' }}>
                            <input type="text" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)}
                            />
                            </form>

                        <div style={{ display: 'flex', justifyContent: 'center'}}>
                        <ol style={{ listStyleType: 'none', paddingLeft: 0 }}>
                            {tasks.map((task, index)=> <li key={index}>{task}
                                <button onClick={()=>deleteTask(index)}  style={{justifyContent: 'center' ,backgroundColor: 'white', color: 'gris',  border: 'none'}}>X</button>
                            </li>)}
                            
                        </ol>
                          </div>
                       
            </div>
                    

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{justifyContent: 'center'}}> Tienes {tasks.length} tareas pendientes</p>
                    </div>
                </>
            )
        }

    export default Tareas