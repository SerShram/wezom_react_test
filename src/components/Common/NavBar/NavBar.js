import React from "react";
import s from './NavBar.module.css'
import NavItem from "./NavItem/NavItem";

function NavBar() {
    return (
        <nav>
            <ul className={s.nav_list}>
                <NavItem name="Home" link="/"/>
                <NavItem name="Contacts" link="/contacts"/>
            </ul>
        </nav>
    );
}

export default NavBar;
