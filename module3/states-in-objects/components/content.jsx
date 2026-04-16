import './content.css'
import StarFilled from './icons8-star-48.png'
import StarEmpty from './emptystar.png'


function Content(props){

        return(

                <div className="whole-container">

                <article className="main-container">
                        <img  className="main-image"
                        src={props.Info.img} alt="" />


                        <div>
                                <button  onClick={props.HandleToggle} className='new-button'>


                                    <img className="icon" 
                                    src={props.Info.isFav?StarFilled:StarEmpty} alt="" />


                                </button>

                            <h2 className="fullname">{props.Info.firstname} {props.Info.lastname}</h2>
                            <p className="phonenum">{props.Info.phone}</p>
                            <p className="emailadd">{props.Info.email}</p>
                        </div>
                </article>
            
                </div>
        )
}


export default Content