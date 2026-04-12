import reactimg from './earth.png'
import './header.css'
function Header(){


        return(

                    <header className='main-heading'>
                        <img className="globe-image" src={reactimg} /> <span className='text'>my travel journal</span>
                    </header>
        )
}
export default Header
