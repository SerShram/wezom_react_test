import React from 'react';
import s from './Card.module.css';
import CopyEl from "../../Widgets/CopyEl/CopyEl";
import {NavLink} from "react-router-dom";

const Card = ({currentUsers}) => {
  console.log(currentUsers)
  return (
    <div className={s.cards}>
      {currentUsers.map((user, index) => {
        return (
          <div className={s.card} key={index}>
            <div className={s.card__container}>
              <div className={s.card__image}>
                <img src={user.picture.large} alt=""/>
              </div>
              <div className={s.card__content}>
                <div className={s.card__title}>
                  <NavLink
                    to={`/contacts/${user.userId}`}
                    className={s.card__name}
                    key={user.id.value}>
                    {`${user.name.title}. ${user.name.first} ${user.name.last}`}
                  </NavLink>
                    <span className={s.card__age}>
                    ({user.dob.age} years)
                  </span>
                </div>
                <div className={s.card__email}>
                  <CopyEl/>
                  <a href={'mailto:' + user.email}>{user.email}</a>
                </div>
                <div className={s.card__phone}>
                  <CopyEl/>
                  <a href={'tel:' + user.phone}>{user.phone}</a>
                </div>
                <div className={s.card__location}>
                  <CopyEl/>
                  <div className={s.card__location_wrap}>
                    <div className={s.card__country}>{user.location.country}</div>
                    <div className={s.card__address}>
                      {user.location.street.number + ' ' + user.location.street.name + ', ' + user.location.city + ', ' + user.location.state + ' ' + user.location.postcode}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Card;