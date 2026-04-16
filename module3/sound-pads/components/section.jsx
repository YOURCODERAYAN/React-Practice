import './section.css'
export default function Section({pads , HandleToogle , activeId}){


        return(

            <>
                {

                    pads.map(item=>(

                <button
                
                key = {item.id}
                onClick={()=>HandleToogle(item.id)}

                

                style={{

                    backgroundColor: item.color,

                    opacity:activeId === item.id ? 1 : 0.3
                }}
                >
                
                </button>


                    )
                )
                }

            </>
        )
}