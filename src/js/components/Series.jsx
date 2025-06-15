        import React, {useState} from "react";

        const Series = ()=>{
        
            const[favorites, setFavorites] = useState (['beter call saul', 'suits','band of bhrothers','nr robot', 'paradaise','como defender a un asesino'])

            let nueva= 'stranger thinks'

            function add(){
                console.log('add')
                console.log(favorites)
                console.log(...favorites)
                setFavorites([...favorites, nueva])
                console.log(favorites)
               
            }

            return(
                <>
                    <h1>Series</h1>
                    <h2>tienes {favorites.length} series favoritas</h2>
                    {favorites}
                    <div>
                        <button onClick={add}>Agrega serie</button>
                    </div>

    {favorites.map((series,index)=> <p key={index}>el indice es: {index} {series}</p> )}
                </>
            )
        }

    export default Series