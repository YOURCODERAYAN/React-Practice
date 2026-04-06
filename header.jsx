import reactimg from "./React.png";
import "./header.css"
function Header(){

        return(
            <div className="header-div">
                <header>
                        <img  src={reactimg} alt="react-img" />
                </header>

                <ul className="nav-bar">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>
        )
}


export default Header;