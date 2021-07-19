import React from "react";
import s from "./Statistic.module.css"

const Statistic = ({users}) => {

    let males = 0;
    let females = 0;
    let indeterminate = 0;
    let nat = {};

    for (let i = 0; i < users.length; i++) {
        (users[i].gender === 'male') ? males++ :
            (users[i].gender === 'female') ? females++ :
                 indeterminate++ ;
        // Nationalities
        if (typeof nat[users[i].nat] === 'undefined') {
            nat[users[i].nat] = 1;
        } else {
            nat[users[i].nat]++;
        }
    }

    let predominate = (males > females) ? 'Men predominate' :
        (males < females) ? 'Women predominate' :
            'Equally';

    let nationalities = () => {
        let out = '';
        for (const key  in nat) {
           out += `<div><span>${key}:</span> ${nat[key]} contacts</div>`;
        }
        return {__html: out}
    }

    return (
        <div className={s.stat}>
            <div className={s.stat__wrap}>
                <h2>Statistic</h2>
                <div className={s.stat__total_stats}>
                    <div className={s.stat__item_flex}>
                        <div className={s.stat__item}>
                            <div className={s.stat__title}>Collection size</div>
                            <div className={s.stat__content}>{users.length}</div>
                        </div>
                    </div>
                    <div className={s.stat__item_flex}>
                        <div className={s.stat__items}>
                            <div className={s.stat__item}>
                                <div className={s.stat__title}>Males</div>
                                <div className={s.stat__content}>{males}</div>
                            </div>
                            <div className={s.stat__item}>
                                <div className={s.stat__title}>Females</div>
                                <div className={s.stat__content}>{females}</div>
                            </div>
                            <div className={s.stat__item}>
                                <div className={s.stat__title}>Indeterminate</div>
                                <div className={s.stat__content}>{indeterminate}</div>
                            </div>
                        </div>
                        <span className={s.stat__dominate}>{predominate}</span>
                    </div>
                </div>
                <div className={s.stat__details}>
                    <div className={s.stat__title}>Nationalities</div>
                    <div className={s.stat__nat_flex} dangerouslySetInnerHTML={nationalities()} />
                </div>
            </div>
        </div>
    )
}

export default Statistic;