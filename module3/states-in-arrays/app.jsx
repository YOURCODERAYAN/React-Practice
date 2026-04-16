    import Content from './components/content'
    import React from 'react'

    function App(){
        const Array = ["😀", "😂", "❤️", "🔥", "🌟", "🍕", "🐱", "🚀", "🎉", "🌍"]
       

        
        let[state , setState] = React.useState([])


        function AddingClick(){

                setState((prev)=> [...prev , Array[prev.length]])
        }
         const ele = state.map((x,index)=> {

                return(
                    <>
                        <li key={index}>{x}</li>
                    </>
                )
        })




            return(

                    <Content

                    Ele={ele}
                    
                    AddingClick={AddingClick}
                    
                    />
            )
    }

    export default App