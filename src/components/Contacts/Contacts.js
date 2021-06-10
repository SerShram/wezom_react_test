import React from 'react'
import Card from "./Card/Card";
import axios from "axios";
import s from './Contacts.module.css'

class Contacts extends React.Component {

    componentDidMount() {
        let random = Math.ceil(Math.random() * 100); // Случайное количество пользователей
        axios.get('https://randomuser.me/api/?seed=ss&page=3&results=' + random).then(response => {
            let users = response.data.results;
            console.log(users);

            this.props.setUsers(users);
        });
    }

    render() {
        return (
            <div className={s.container}>
                <h1>Contacts</h1>
                <div className={s.cards}>
                    { this.props.users.map((user, index) => <Card user={user} key={index}/>) }
                </div>
            </div>
        )
    }

}

export default Contacts;