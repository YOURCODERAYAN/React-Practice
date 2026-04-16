import React from 'react'
import Section from './components/section'

function App(){

    const[ingrediants , setIngrediants] = React.useState([])

    const [receipes , setReceipes] = React.useState([])

    const[selectedRecepie , setselectedRecepie] = React.useState(null)

    function Toggle(fromData){

        const ele = fromData.get('ingrediants')
        setIngrediants(prev =>  [...prev , ele])

    }


    async function getReceipe(){


            const ingrediant= ingrediants[0] || 'chicken'; 


        try{

                const res = await fetch(

                    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrediant}`
                )

                const data = await  res.json()
        setReceipes(data.meals)
        }

        catch(error){

                console.log(error)
        }
        
    }


    async function getIns(id){

            try{

                    const res = await fetch(

                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
                    )

                const data = await res.json()

                setselectedRecepie(data.meals[0])
            }

            catch(error){

                    console.log(error)
            }
    }






        return(

            <Section 
            
        Toggle={Toggle}

        ingrediants={ingrediants}

        receipes={receipes}

        getReceipe={getReceipe}

        getIns = {getIns}

        selectedRecepie={selectedRecepie}
            
            />

        )
}

export default App