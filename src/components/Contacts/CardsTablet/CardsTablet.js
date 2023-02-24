import React from "react";
import s from './CardsTablet.module.css';
import {NavLink} from "react-router-dom";

const CardsTablet = ({currentUsers}) => {

  return (
    <div className={s.table}>
      <div className={s.table__head}>
        <div className={s.table__ava}>Avatar</div>
        <div className={s.table__item}>Full name</div>
        <div className={s.table__item}>Birthday</div>
        <div className={s.table__item}>Email</div>
        <div className={s.table__item}>Phone</div>
        <div className={s.table__item}>Location</div>
        <div className={s.table__nat}>Nationality</div>
      </div>

      {currentUsers.map((user, index) => {
        return (
          <div className={s.table__content} key={index}>
            <div className={s.table__ava}>
              <NavLink to={`/contacts/${user.name.first}_${user.name.last}`}>
                <img src={user.picture.thumbnail} alt=""/>
              </NavLink>
            </div>
            <div className={s.table__item}>Full name</div>
            <div className={s.table__item}>Birthday</div>
            <div className={s.table__item}>Email</div>
            <div className={s.table__item}>Phone</div>
            <div className={s.table__item}>Location</div>
            <div className={s.table__nat}>Nationality</div>
          </div>
        )
      })}
    </div>
  )
}

export default CardsTablet;