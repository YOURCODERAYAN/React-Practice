function Content(props){

            return(

                    <main className="main-container">

                        <button  onClick={props.AddingClick}
                        className="add-button">

                            Add Items

                        </button>

                            <ul className="list">
                                {props.Ele}
                            </ul>
                    </main>
            )
}

export default Content