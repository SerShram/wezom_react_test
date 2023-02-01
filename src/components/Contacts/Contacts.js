import React, {useState} from 'react';
import Card from "./Card/Card";
import MyPagination from "../Widgets/MyPagination/MyPagination";
import CountPerPage from "../Widgets/CountPerPage/CountPerPage";
import Statistic from "./Statistic/Statistic";
import CardsViewSwitch from "../Widgets/CardsViewSwitch/CardsViewSwitch";
import CardsTablet from "./CardsTablet/CardsTablet";
import preloader from "../../assets/images/spiner.svg";
import './Contacts.scss';

const Contacts = ({users, currentPage, setCurrentPage, usersPerPage, setUsersPerPage, isFetching}) => {

  const [typeOfCards, setTypeOfCards] = useState(true);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="contacts-page">
      <div className="contacts-page__header">
        <h1>Contacts</h1>
        <CardsViewSwitch
          typeOfCards={typeOfCards}
          setTypeOfCards={setTypeOfCards}
        />
      </div>

      {
        isFetching
          ? <div className="preload">
            <img src={preloader} alt='loading'/>
          </div>
          : null
      }

      {
        typeOfCards
          ? <Card currentUsers={currentUsers}/>
          : <CardsTablet currentUsers={currentUsers}/>
      }

      <Statistic users={users}/>

      <div className="paginate_container">
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