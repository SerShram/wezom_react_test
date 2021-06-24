import React, {useEffect, useState} from 'react'
import Card from "./Card/Card";
import axios from "axios";
import s from './Contacts.module.css'
import MyPagination from "../Widgets/MyPagination/MyPagination";
import CountPerPage from "../Widgets/CountPerPage/CountPerPage";
import Statistic from "./Statistic/Statistic";

const Contacts = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(6);

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            let random = Math.ceil(Math.random() * 100); // Случайное количество пользователей
            const res = await axios.get(`https://randomuser.me/api/?results=${random}&seed=ss`);
            setUsers(res.data.results);
            setLoading(false);
        }
        // noinspection JSIgnoredPromiseFromCall
        fetchUsers();
    }, []);
console.log(users)
    // Get current Users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className={s.container}>
            <h1>Contacts</h1>
            <div className={s.cards}>
                {currentUsers.map((user, index) => {
                    return <Card
                        loading={loading}
                        user={user}
                        key={index}/>
                })}
            </div>
            <div>
                <Statistic/>
            </div>
            <div className={s.paginate_container}>
                <MyPagination
                    usersPerPage={usersPerPage}
                    totalUsers={users.length}
                    paginate={paginate}/>
                <CountPerPage
                    usersPerPage={usersPerPage}
                    setUsersPerPage={setUsersPerPage}/>
            </div>
        </div>
    )
}

export default Contacts;