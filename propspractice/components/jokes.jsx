import './jokes.css'

export default function Jokes(props){

        return(

                    <div className="container">
                        {props.setup === undefined
                        ? <p><strong>Punchline:</strong>{props.punchline}</p>
                        :(
                        <>
                            <p className="first"><strong>Setup:</strong>{props.setup}</p>
                            <p className="second"><strong>Punchline:</strong>{props.punchline}</p>
                            <p className="third"><strong>upvotes:</strong>
                                {props.upvotes}</p>
                            <p><strong>downvotes:</strong>
                                {props.downvotes}</p>

                            <p>
                                <strong>Comments: </strong>
                                
                            </p>
                        </>
                        )
                    }

                    </div>
        )
}



