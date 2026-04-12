import './content.css'
function Content(props){

        return(
            <>
                <article>
                    <div className="image-section">
                        <img  className="main-image"src={props.img}/>
                    </div>

                    <div className='main-section'>
                        <div className="top">
                            <img  className="logo" src={props.pointer}/> <span className="place">{props.firstname}</span> <a className='link' href={props.map}>view maps on google</a>
                        </div>

                        <h1 className="heading">{props.secondname}</h1>
                        <p className="date-from-to">{props.journeydate}</p>
                        <div className="about">{props.allabout}</div>
                    </div>
                </article>

            <hr />

            </>
        
        )
}

export default Content