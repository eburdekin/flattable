import { NavLink } from "react-router-dom";
import '../App.css';

export default function NavBar() {

    const style = {
        'color': '#400235',
        'fontFamily': 'Righteous',
        'fontSize': '24px',
        'padding': '10px',
        'textDecoration': 'none',
    }

    return <>
        <nav className="sidebar">
            <img src="../images/logo.png"
            width="110px"
            alt="logo"
            />
            <br></br>
            <NavLink
                to="/"
                className="nav-link"
                style={style}
            >
                Home
            </NavLink>
            <NavLink
                to="/Reservations"
                className="nav-link"
                style={style}
            >
                Reservations
            </NavLink>
            <NavLink
                to="/Menu"
                className="nav-link"
                style={style}
            >
                Menu
            </NavLink>
        </nav>
    </>
}