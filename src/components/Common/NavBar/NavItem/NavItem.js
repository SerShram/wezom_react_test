import s from './NavItem.module.css';
import {NavLink} from "react-router-dom";

function NavItem(props) {
    return (
        <li className={s.nav_item}>
            <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    );
}

export default NavItem;