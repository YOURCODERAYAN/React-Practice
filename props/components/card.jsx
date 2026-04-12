
import './card.css';
 export default   function Card(props){


                return(
                    <article>
                        <img  className="cat-image" src={props.img}/>

                        <h1 className="main-heading">{props.name}</h1>

                    <div><i class="ri-phone-fill"></i><span>{props.phone}</span></div>
                    <div><i class="ri-mail-fill"></i><span>{props.email}</span></div>
                    </article>
                )
    }