function Section({Toggle , ingrediants , receipes , getReceipe , getIns , selectedRecepie}){


        return(

<>
                <form action={Toggle}>

            <input type="text" 
            
            placeholder="type ingrediants"
            
            name="ingrediants"
            />

            <button className="adding-button">

                Add ingrediants
            </button>



                <ul>

                
                {ingrediants.map((x,index)=>(


                    <li key={index}>{x}</li>
                )
                
                
                
                )} 


                </ul>


                </form>

                <button onClick={getReceipe}>
        Get Recipe
      </button>

      
        {receipes &&
          receipes.map((meal) => (
            <div key={meal.idMeal}>
              <h3 onClick={()=> getIns(meal.idMeal)}>{meal.strMeal}</h3>
              <img src={meal.strMealThumb} width="150" />
            
        


          {selectedRecepie?.idMeal=== meal.idMeal && (

                <>

                    <h2>{selectedRecepie.strMeal}</h2>

                    <p>{selectedRecepie.strInstructions}</p>
                </>
                
          )}   
          

          </div>
         ))}
      

                </>
        )
}

export default Section
