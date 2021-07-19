import React, {useState} from 'react'
import Card from "./Card/Card";
import s from './Contacts.module.css'
import MyPagination from "../Widgets/MyPagination/MyPagination";
import CountPerPage from "../Widgets/CountPerPage/CountPerPage";
import Statistic from "./Statistic/Statistic";
import CardsViewSwitch from "../Widgets/CardsViewSwitch/CardsViewSwitch";
import CardsTablet from "./CardsTablet/CardsTablet";
import preloader from "../../assets/images/spiner.svg"

const Contacts = ({users, currentPage, setCurrentPage, usersPerPage, setUsersPerPage, isFetching}) => {

    const [typeOfCards, setTypeOfCards] = useState(true);

    // Get current Users
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    console.log(isFetching)

    return (
        <div className={s.container}>
            <div className="flex flex-ai-c flex-jc-sb">
                <h1>Contacts</h1>
                <CardsViewSwitch typeOfCards={typeOfCards} setTypeOfCards={setTypeOfCards}/>
            </div>

            {isFetching ? <img src={preloader}/> : null}

            {typeOfCards
                ?  <Card currentUsers={currentUsers}/>
                : <CardsTablet currentUsers={currentUsers}/>
            }

            <div>
                <Statistic users={users}/>
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