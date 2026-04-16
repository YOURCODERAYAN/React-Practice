import React from 'react'
import Section from './component/section'


function Index(){

    const [ingrediants , setIngrediants] = React.useState([])
    const [receipe , setReceipe] = React. useState([])


    function Toggle(fromData){

            const ele =  fromData.get('ingrediants')

        setIngrediants(prev=>[...prev , ele])

    }


   async  function getReceipe(){

    const  API_KEY = import.meta.env.VITE_HUGGING_API_KEY;

  try {
      const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Write a short recipe for pancakes",
        }),
      });

      const data = await response.json();
      // the endpoint can vary // we have to change it //

      const receipetext = data[0]?.generated_text || "No receipe "

      // add new recipe to the array
      setReceipe((prev) => [...prev, receipetext ]);
}


catch(error){

        console.log(error)
}
   }



    return(

        <Section

    ingrediants={ingrediants}
        
    Toggle={Toggle}

    getReceipe={getReceipe}

    receipe={receipe}
        
        
        />


    )
}



export default Index