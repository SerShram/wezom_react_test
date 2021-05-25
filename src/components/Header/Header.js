import s from './Header.module.css'
import Logo from "../Logo/Logo";

let Header = () => {
    return(
        <header className={s.header}>
            <Logo/>
            <div>Home</div>
        </header>
    )
}
export default Header;