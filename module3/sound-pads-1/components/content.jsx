import './content.css'


function Content({pads , Toggle , activeId}){


        return(
            <>
            {pads.map((x)=>(

            <button
        
        key={x.id}

        onClick={()=> Toggle(x.id)}

        style={{

            backgroundColor:x.color,
        
        opacity:activeId.includes(x.id) ? 1 :0.4

        }}
 
            >




            </button>


            ))

        }


            </>

        )
}


export default Content