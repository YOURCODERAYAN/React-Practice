import React from 'react'
import Pads from './pads'
import Content from './components/content'
function App(){

    const[activeId , setactiveId] = React.useState([])

    function Toggle(id){

            setactiveId(prev=>

                prev.includes(id)?
            prev.filter(item=> item!==id):

            [...prev , id]

            )
    }

        return(

                <Content
                
                pads={Pads}

                Toggle={Toggle}

                activeId={activeId}
                
                />
        )
}

export default App