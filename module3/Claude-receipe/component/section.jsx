function Section({ingrediants,Toggle , getReceipe , receipe}){


        return(
                <>
                <form action={Toggle}>
                        <input type="text" 
                        
                        placeholder="type-some-ingrdiants"
                        name="ingrediants"


                        />

                    <button> Add Ingrediants</button>


                <ul>

                        {ingrediants.map((x,index)=>

                            <li key={index}>{x}</li>
                        )}
                </ul>

                </form>



                <section>

                        <div>
                            <p> Are you ready to get some exiting receipe </p>
                                
                                
                        <span><button onClick={getReceipe}>Get Receipe</button></span>


                            <div>
                                {receipe}
                            </div>
                        </div>
                </section>

            </>

                

        )
}

export default Section