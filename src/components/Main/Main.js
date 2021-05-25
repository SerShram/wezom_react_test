import logo from "../../images/logo.svg";
import s from './Main.module.css'

let Main = () => {
    return(
        <main className={s.main}>
            <img src={logo} className={s.main_logo} alt="logo" />
        </main>
    )
}

export default Main;