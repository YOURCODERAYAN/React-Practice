const num =[1,2,3,4]

const ans = num.map((x)=> x*x)

console.log(ans)


const name = ["alice" , "bob" , "charlie" , "danielle"];


const val = name.map((value)=>

            value[0].toUpperCase() + value.slice(1)
)


console.log(val);



const pokemon = ["Bulbasor" , "Charmender" ,"Squirlte"];

const ele = pokemon.map((x)=> `<p> ${x} </p>`);
console.log(ele)