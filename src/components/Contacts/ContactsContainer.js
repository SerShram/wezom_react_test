import {connect} from "react-redux";
import Contacts from "./Contacts";
import {setUsersAC} from "../../Redux/contacts-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.ContactsPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default ContactsContainer;