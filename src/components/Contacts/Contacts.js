import React from 'react'
import Card from "./Card/Card";
import axios from "axios";
import s from './Contacts.module.css'
import MyPagination from "../Widgets/MyPagination/MyPagination";

class Contacts extends React.Component {

    componentDidMount() {
        let random = Math.ceil(Math.random() * 100); // Случайное количество пользователей

        axios.get(`https://randomuser.me/api/?results=${random}&seed=ss`)
            .then(response => {
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
                    { this.props.users.map((user, index) => {
                        return <Card
                            user={user}
                            key={index}/>
                    }) }
                </div>
                <div>
                    <h2>Statistic</h2>
                </div>
                <div>
                    <MyPagination/>
                </div>
            </div>
        )
    }

}

export default Contacts;