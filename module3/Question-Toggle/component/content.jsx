function content({question , HandleToggle , activeId}){


        return(
            <>
                <div>{question.map((x)=>(
            <p  key={x.id} onClick={()=> HandleToggle(x.id)}>
                {x.question}
            
            {activeId === x.id && (

                <span>{x.answer}</span>

            )}
            
            </p>
            
            
                
                
               ))}</div>
            </>
        )
}


export default content