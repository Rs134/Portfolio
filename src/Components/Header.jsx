import { Link } from "react-router-dom"

function Header(){
    return (
        <div className="header-container">
            <div className="header-initial">
                <h1> RS. </h1>
            </div>
            <div className="nav-container">
                <ul className="nav-links">
                    <a href="#home"> <li> Home </li> </a>
                    <a href="#About"> <li> About </li> </a>
                    <a href="#Projects"> <li> Projects </li> </a>
                    <a href="#Contact"> <li> Contact </li> </a>
                </ul>
            </div>
        </div>
    )

}

export default Header