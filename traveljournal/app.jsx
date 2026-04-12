import Header from './components/header'
import Content from './components/content'
import Array from './info'
import './app.css'

function App(){
    const element = Array.map((x)=>
    
            <Content  img={x.img} firstname={x.firstname} pointer= {x.pointer} map={x.map} secondname={x.secondname} journeydate={x.journeydate} allabout={x.allabout}/>
    
    )

        return(
            <>
                <Header />
               {element}
            </>
        )
}

export default App