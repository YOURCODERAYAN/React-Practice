import React from 'react';
import From from './components/from'



function App(){

    let[Item , setItem] = React.useState([])



        function addClick(e){
            e.preventDefault();
            const val = e.target.querySelector('input').value

                setItem(prev=>[...prev , val])
            e.target.reset()
        }


        return(

                <From  
                
                Item={Item}
                addClick={addClick}
                />

        )
}


export default App