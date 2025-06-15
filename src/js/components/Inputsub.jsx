import React,{useState} from 'react'

const Inputsub =()=>{

    const [task,setTask] = useState('')
    
    function envienDatos(e){
        e.preventDefault()
        console.log('envienDatos')
        console.log('Oprimiste ENTER')
        setTask('')
        
   
    }
    return(
        <>      
            <h1>Inputsub</h1>
            <form onSubmit={envienDatos}>
                <label htmlFor="task">Tareas</label>
                <input type="text"  name="task" value={task} onChange={ (e)=>setTask(e.target.value)} />
            </form>
        
        </>
    )
}
export default Inputsub