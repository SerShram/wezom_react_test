import './NavBar.scss'
import {NavLink} from "react-router-dom";
import React from "react";

function NavBar() {
    return (
        <nav>
            <ul className='nav_list'>
                <li className="nav_item">
                    <NavLink
                        to="/"
                        activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li className="nav_item">
                    <NavLink
                        to="Contacts"
                        activeClassName="active">
                        Contacts
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
