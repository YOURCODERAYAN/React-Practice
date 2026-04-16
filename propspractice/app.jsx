import Jokes from './components/jokes'
import './app.css'
import Info from './jokes'
export default function App(){

    const ele = Info.map((x)=> <Jokes setup={x.setup}   punchline={x.punchline}/>)
        return(
            <>
                <div> {ele} </div>

            </>
        )
}