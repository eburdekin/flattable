import { NavLink } from "react-router-dom";
import '../App.css';

export default function NavBar() {

    const style = {
        'color': 'black',
        'fontFamily': 'Righteous',
        'fontSize': '24px',
        'padding': '10px',
        'textDecoration': 'none',
    }

    return <>
        <nav className="sidebar">
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