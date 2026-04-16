import React from 'react'
import Pads from './pads.js'
import Section from './components/section.jsx'

export default function App(){

    const[activeId , setactiveId] = React.useState(null)


        function HandleToogle(id){

                setactiveId(previd => (previd === id ? null : id))
        }

        return(

                <Section
                
                pads={Pads}

                HandleToogle={HandleToogle}

                activeId={activeId}
                
                />
                
        )
}