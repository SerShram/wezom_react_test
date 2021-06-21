import {connect} from "react-redux";
import Contacts2 from "./Contacts2";
import {setCurrentPageAC, setUsersAC} from "../../Redux/contacts-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.ContactsPage.users,
        pageSize: state.ContactsPage.pageSize,
        totalUserCount: state.ContactsPage.totalUserCount,
        currentPage: state.ContactsPage.currentPage,
        countPages: state.ContactsPage.countPages,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },

    }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts2);

export default ContactsContainer;