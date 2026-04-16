import React from 'react'
import question from './question'
import Content from './component/content'

function App(){

    const[activeId , setactiveId] = React.useState(null)

    function HandleToggle(id){

            setactiveId((prev)=> prev === id ? null : id)

    }

        return(

            <Content 
        
        question={question}

        HandleToggle={HandleToggle}

        activeId={activeId}
            
            />

        )
}


export default App