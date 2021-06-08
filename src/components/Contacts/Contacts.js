import React from 'react'
import Card from "./Card/Card";
import axios from "axios";
import s from './Contacts.module.css'

const Contacts = (props) => {
    if (props.users.length === 0) {

        let random = Math.ceil(Math.random() * 100); // Случайное количество пользователей
        axios.get('https://randomuser.me/api/?results=' + random).then(response => {
            let users = response.data.results;
            console.log(users);

            props.setUsers(users);
        });
    }

    let users = props.users.map((user, index) => <Card user={user} key={index}/>)

    return (
        <div>
            <h1>Contacts</h1>
            <div className={s.cards}>
                {users}
            </div>
        </div>
    )
}

export default Contacts;