import s from './Header.module.css'
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

const Header = () => {
    return(
        <header className={s.header}>
            <Logo/>
            <NavBar/>
        </header>
    )
}
export default Header;