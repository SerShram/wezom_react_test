import React from "react";
import {connect} from "react-redux";
import {setCurrentPageAC, setUsersAC, setUsersPerPageAC} from "../../Redux/contacts-reducer";
import axios from "axios";
import Contacts from "./Contacts";

class ContactsContainer extends React.Component {
    componentDidMount() {
        let random = Math.ceil(Math.random() * 1000); // Случайное количество пользователей

        axios.get(`https://randomuser.me/api/?results=${random}&seed=ss`)
            .then(response => {
                let users = response.data.results;
                this.props.setUsers(users);
            });
    }

    render() {
        return (
            <Contacts
                users={this.props.users}
                currentPage={this.props.currentPage}
                usersPerPage={this.props.usersPerPage}
                setCurrentPage={this.props.setCurrentPage}
                setUsersPerPage={this.props.setUsersPerPage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.ContactsPage.users,
        currentPage: state.ContactsPage.currentPage,
        usersPerPage: state.ContactsPage.usersPerPage,
        setUsersPerPage: state.ContactsPage.setUsersPerPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setUsersPerPage: (quantity) => {
            dispatch(setUsersPerPageAC(quantity))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsContainer);
