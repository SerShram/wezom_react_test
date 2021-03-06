import React, {useState} from "react";
import s from './CountPerPage.module.css'

const CountPerPage = ({usersPerPage, setUsersPerPage}) => {

    const [choiceQuantity] = useState([6, 12, 36, 48]);
    const [visibleChoiceQuantity, setVisibleChoiceQuantity] = useState(false);

    const setChoice = (quantity) => {
        setUsersPerPage(quantity);
        setVisibleChoiceQuantity(false);
    }

    return (
        <div>
            <div className={s.block_select}>
                {visibleChoiceQuantity &&
                    <ul className={s.select_list}>
                    {choiceQuantity.map((el, index) => {
                        return <li
                            className={el === usersPerPage ? s.active : ''}
                            key={index}
                            onClick={() => setChoice(el)}>
                            {el} / page
                        </li>
                    })}
                    </ul>
                }
                <span onClick={() => setVisibleChoiceQuantity(true)}>{usersPerPage} / page</span>
            </div>
        </div>
    )

}

export default CountPerPage;