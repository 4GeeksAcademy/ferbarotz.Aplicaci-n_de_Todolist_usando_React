import React,{useState} from 'react'

const Inputkey =()=>{

    const [task, setTask] = useState('repasar react')
    
    function oprimioTecla(e){
        console.log('oprimioTecla')
        console.log(e.key)
        console.log(e.keyCode)

           if (e.key === 'Enter') {
            console.log('Oprimiste ENTER')
            setTask('') 
        }

    }
    return(
        <>
        <h1>Inputkey</h1>
        <input type="text" onKeyDown={oprimioTecla} name="task" value={task} onChange={(e)=>setStak(e.target.value)}/>
        </>

       
    )
}
export default Inputkey