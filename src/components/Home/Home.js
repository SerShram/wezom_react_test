import logo from "../../images/logo.svg";
import s from './Home.module.css'

let Home = () => {
    return(
        <main className={s.main}>
            <img src={logo} className={s.main_logo} alt="logo" />
        </main>
    )
}

export default Home;