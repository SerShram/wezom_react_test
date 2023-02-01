import React from 'react';
import s from './Card.module.css';
import CopyEl from "../../Widgets/CopyEl/CopyEl";

const Card = ({currentUsers}) => {

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
                <a href='#' className={s.card__title}>
                                <span
                                  className={s.card__name}>{user.name.title + '. ' + user.name.first + ' ' + user.name.last}</span>
                  <span className={s.card__age}> ({user.dob.age} years)</span>
                </a>
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
                    <div className={s.card__country}>{'/' + user.location.country + '/'}</div>
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