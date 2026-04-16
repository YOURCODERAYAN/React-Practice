import React from 'react'
import Callerface from './callerface.jpg'
import './app.css'

import Content from './components/content'


function App(){

    let[info , setInfo] = React.useState({

        img : Callerface,
        firstname : "Joseph",
        lastname :"Steve",
        phone : "(222) - 999 8777",
        email : "abcde@yahoo.com",
        isFav : false

    })

    function HandleToggle(){

    setInfo((prev)=>{

        return{
            ...prev,

            isFav:!prev.isFav
        }

    })
}


        return(
            <>
                
                <Content

                Info={info}
                HandleToggle={HandleToggle}
                
                />

            </>

        )
}


export default App