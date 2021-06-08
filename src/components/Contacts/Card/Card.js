import React from 'react';
import s from './Card.module.css';

const Card = (props) => {
    let u = props.user;
    return (
        <div className={s.card}>
            <div className={s.card__container}>
                <div className={s.card__image}>
                    <img src={u.picture.large} alt=""/>
                </div>
                <div className={s.card__content}>
                    <a href="" className={s.card__title}>
                        <span className={s.card__name}>{u.name.title + '. ' + u.name.first + ' ' +u.name.last}</span>
                        <span className={s.card__age}> ({u.dob.age} years)</span>
                    </a>
                    <div className={s.card__email}>
                        <a href={'mailto:' + u.email}>{u.email}</a>
                    </div>
                    <div className={s.card__phone}>
                        <a href={'tel:' + u.phone}>{u.phone}</a>
                    </div>
                    <div className={s.card__location}>
                        <div className={s.card__location_wrap}>
                            <div className={s.card__country}>{'/' + u.location.country + '/'}</div>
                            <div className={s.card__address}>

                                {u.location.street.number + ' ' + u.location.street.name + ', ' +  u.location.city}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;