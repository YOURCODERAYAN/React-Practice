// const num = [1,2,3,4,5]

-----> [1,4,9,16,25]


// we have to return square of each number 

const ans = num.map((x)=>(x*x))
console.log(ans);



// const names = ["alice" , "bob" , "charlie" , "danielle"]

// we have to make first letter of every string capitalized //


const char = names.map((x)=> x[0].toUppercase() + x.slice(1))

console.log(char);

const pokemon =["Bulbasor" , "Charmender" ,"Squirlte"]


    const element = pokemon.map((name)=>

                 <p> {name} </p>
                
    )

console.log(element)
