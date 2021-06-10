import React from "react";
import logo from "../../images/logo.svg";
import s from './Home.module.css'

let Home = () => {
    return(
        <div className={s.main}>
            <img src={logo} className={s.main_logo} alt="logo" />
        </div>
    )
}

export default Home;