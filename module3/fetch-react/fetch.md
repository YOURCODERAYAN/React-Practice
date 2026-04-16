// we are going to see how api can be called and can be stored in use state

// we are going to use the single item exapand toggle 
// also we are going to use the multiple expand toggle

// SINGLE ITEM TOGGLE 

function App(){

    const[activeId , setactiveId] = React.useState(null)

    const[receipes , setReceipes] = React.useState([])

  async  function Toggle(id){

                if(activeId === id){

                    setactiveId(null)

                    return;
                }

                activeId(id)

        const res = await fetch(

            `{api link to be fetched}`
        )

        const data = await res.json()

        setReceipes(data.meals[0])

    }

}


// render logic

{activeId === meal.idMeal && receipes &&(

    <p>{receipes.strInstruction}</p>
)}


// MULTIPLE EXPAND TOGGLE // 

const [activeId , setactiveId]  = React.useState([])

const [ recepies , setReceipes ] = React.useState([])

    async  function HandleToggle(id){

            setactiveId(
                prev=> 
            
            prev.includes(id)?
            prev.filter(item=> item ==! id )
            :[...prev , id]

            )

        if(!recepies[id]){
                const res = await fetch(

                    `api link`
                )
            const data = await res.json()

        setRecepies(prev=> ({

            ...prev,
            [id]:data.meals[0]
        }))
        }


    }

    //render logic //

{activeId.includes(meal.idMeal) && recipeDetails[meal.idMeal] && (
  <p>{recipeDetails[meal.idMeal].strInstructions}</p>
)}
