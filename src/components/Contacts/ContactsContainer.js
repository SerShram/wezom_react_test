import React, {useEffect} from "react";
import {connect} from "react-redux";
import {setCurrentPageAC, toggleIsFetchingAC, setUsersAC, setUsersPerPageAC} from "../../Redux/contacts-reducer";
import axios from "axios";
import Contacts from "./Contacts";

const ContactsContainer = (props) => {

  const random = Math.ceil(Math.random() * 1000); // Случайное количество пользователей

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?results=${random}&seed=ss`)
      .then(response => {
        props.toggleIsFetching(true);
        let users = response.data.results;
        props.setUsers(users);
        props.toggleIsFetching(false);
      });
  }, [])

  return (
    <Contacts
      users={props.users}
      currentPage={props.currentPage}
      usersPerPage={props.usersPerPage}
      setCurrentPage={props.setCurrentPage}
      setUsersPerPage={props.setUsersPerPage}
      isFetching={props.isFetching}/>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.ContactsPage.users,
    currentPage: state.ContactsPage.currentPage,
    usersPerPage: state.ContactsPage.usersPerPage,
    setUsersPerPage: state.ContactsPage.setUsersPerPage,
    isFetching: state.ContactsPage.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage))
    },
    setUsersPerPage: (quantity) => {
      dispatch(setUsersPerPageAC(quantity))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
