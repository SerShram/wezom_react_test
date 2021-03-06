import React from "react";
import s from './Logo.module.css';

let Logo = () => {
    return (
            <a href="https://wezom.com.ua/" className={s.logo}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="57"
                    height="21"
                    viewBox="0 0 57 21"
                >
                    <path d="M31.2 1.1C30.5.4 29.5 0 28.5 0c-1 0-2 .4-2.7 1.2l-9.6 10.2L6.5 1.1C5-.4 2.6-.4 1.1 1.1c-1.5 1.6-1.5 4.1 0 5.6l12.3 13c.7.8 1.7 1.2 2.7 1.2 1 0 1.9-.4 2.7-1.2l9.6-10.2L38 19.7c.7.8 1.7 1.2 2.7 1.2 1 0 1.9-.4 2.7-1.2l12.3-13c1.5-1.6 1.5-4.1 0-5.6-1.5-1.6-3.9-1.6-5.4 0l-9.7 10.2-9.4-10.2z"/>
                </svg>
            </a>
    )
}

export default Logo;