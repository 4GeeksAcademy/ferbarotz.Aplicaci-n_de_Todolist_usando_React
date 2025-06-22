        import React, {useState, useEffect} from "react";
        import {createUser} from "./api/todo.js"
        const Counter = ()=>{
        
            const [count, setCount] = useState(0)
            const [count2, setCount2] = useState(0)

            //useEffect(funcion de callback,elemento a rastrear) //cotilla = chismoso
            useEffect(()=>{
                console.log('count cambio')
            },[count])

             useEffect(()=>{
                console.log('count2 cambio')
            },[count2])

            useEffect(()=>{
                console.log('count o count2 cambio')
            },[count, count2])

            useEffect(()=>{
                console.log('cuando me ejecuto')
            },[])
            
            useEffect(()=>{
                createUser()
                console.log('Crear usuario')
            },[])

            
            //COTILLA
        
            return(
                <>
                <h1>Counter</h1>
                <div>
                    <p>El valor de Count es: {count}</p>
                    <button onClick={()=>setCount(count +1)}>Agregar</button>
                </div>
                 <div>
                    <p>El valor de Count2 es: {count2}</p>
                    <button onClick={()=>setCount2(count2 -1)}>Quitar</button>
                </div>
                </>
            )
        }
        export default Counter