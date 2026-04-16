function From(props){

        return(

                <form onSubmit={props.addClick}>

                <input className="text-area" type="text"   placeholder="Type your ingrediants" />


                <button className="add-button" type="submit">
                        "+" Add Ingrediants
                </button>


                <ul>
                    {props.Item.map((x,index)=>
                            (

                                <li key={index}>{x}</li>
                            )
       
                    )}
                </ul>



                </form>
        )


}


export default From