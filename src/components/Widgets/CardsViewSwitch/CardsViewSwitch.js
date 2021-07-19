import React from "react";
import s from './CardsViewSwitch.module.css';

const CardsViewSwitch = ({typeOfCards, setTypeOfCards}) => {

    const setViewDateOfUsers = (value) => {
        setTimeout(() => {
            setTypeOfCards(value);
        }, 300);

    }

    return (
        <div className="flex">
            <button className={(typeOfCards ? s.is_tiles : s.tiles) + ' flex flex-ai-c flex-jc-c'} onClick={() => setViewDateOfUsers(true)}>
                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="appstore" width="1em"
                     height="1em" fill="currentColor" aria-hidden="true">
                    <path
    d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H212V212h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-52 268H612V212h200v200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H212V612h200v200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16zm-52 268H612V612h200v200z"/>
                </svg>
            </button>
            <button className={(!typeOfCards ? s.is_tabular : s.tabular) + " flex flex-ai-c flex-jc-c"} onClick={() => setViewDateOfUsers(false)}>
                <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="unordered-list" width="1em"
                     height="1em" fill="currentColor" aria-hidden="true">
                    <path
    d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"/>
                </svg>
            </button>
        </div>
    )
}

export default CardsViewSwitch;