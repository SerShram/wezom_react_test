import React from 'react'
import Card from "./Card/Card";
import axios from "axios";

const Contacts = (props) => {
    if (props.users.length === 0) {

        axios.get('https://randomuser.me/api')
            .then(response => console.log(response))

        props.setUsers(
            [
                {
                    id: 1,
                    ava: '2',
                    firstname: 'Alex',
                    lastname: 'Ivanov',
                    age: '33',
                    gender: 'Mr',
                    email: 'xxx@x',
                    phone: '123-45-67',
                    nation: 'Australian',
                    location: {country: 'UA', address: 'Kiev',}
                },
                {
                    id: 2,
                    ava: '22',
                    firstname: 'Glory',
                    lastname: 'Petren',
                    age: '45',
                    gender: 'Mrs',
                    email: 'yyyyyyy@yy',
                    phone: '099666-66-66',
                    nation: 'British',
                    location: {country: 'RU', address: 'Moscow',}
                },
                {
                    id: 3,
                    ava: '222',
                    firstname: 'John',
                    lastname: 'Black',
                    age: '19',
                    gender: 'Mr',
                    email: 'zzzz@zzzzzz',
                    phone: '234-56-777',
                    nation: 'Spanish',
                    location: {country: 'EN', address: 'New-York',}
                },
            ]
        );
    }

    let users = props.users.map(user => <Card user={user} key={user.id}/>)

    return (
        <div>
            <h1>Contacts</h1>
            {users}
        </div>
    )
}

export default Contacts;