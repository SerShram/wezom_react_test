import {NavLink} from "react-router-dom";
import './NavBar.scss';

const jsonRoutes = {
  "routes": [
    {
      "id": "1",
      "route": "/",
      "component": "Home"
    },
    {
      "id": "2",
      "route": "/contacts",
      "component": "Contacts"
    }
  ]
}

function NavBar() {
  return (
    <nav>
      <ul className='nav_list'>
        {
          jsonRoutes.routes.map(item =>
            <li className="nav_item" key={item.id}>
              <NavLink
                exact
                to={item.route}
                activeClassName="active"
              >
                {item.component}
              </NavLink>
            </li>)
        }
      </ul>
    </nav>
  );
}

export default NavBar;
