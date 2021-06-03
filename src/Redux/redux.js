import {combineReducers, createStore} from "redux";
import contactsPageReducer from "./contacts-reducer";

let redusers = combineReducers({
    ContactsPage: contactsPageReducer,
});

let store = createStore(redusers);

export default store;