import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="left-nav">
                <div className="logoname">
                    <h1>User Interface API</h1>
                </div>
            </div>
            <div className="right-nav">
                <div className="menu-nav">
                    <ul>
                        <li>
                            <NavLink to="/">Log Out</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
