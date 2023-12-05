import { NavLink } from "react-router-dom";
import '../App.css';

export default function NavBar() {
    return <>
        <nav className="sidebar">
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="/Reservations"
                className="nav-link"
            >
                Reservations
            </NavLink>
            <NavLink
                to="/Menu"
                className="nav-link"
            >
                Menu
            </NavLink>
        </nav>
    </>
}