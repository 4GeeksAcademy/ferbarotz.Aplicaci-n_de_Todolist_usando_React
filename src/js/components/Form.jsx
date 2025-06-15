import React, {useState} from "react";


const Form = ()=>{

const [firstName, setFirstname]= useState('kaney')
const [lastName, setLastname]= useState('snow')

    return(
        <>

        
            <div className="mb-3">
                <label htmlFor="name" className="form-label">nombre</label>
                <input type="text" value={firstName} onChange={ (e)=>setFirstname(e.target.value)} className="form-comtrol" id="name" />
            </div>
            <div className="mb-3">
                 <label htmlFor="lastName" className="form-label">apellido</label>
                 <input type="text" value={lastName} onChange={ (e)=>setLastname(e.target.value) } className="form-comtrol" id="lastname" />
            </div>
            <p>Tu nombre completo es: {firstName} {lastName}</p>
        </>
            )
    }
    
export default Form