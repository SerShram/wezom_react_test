import {combineReducers, createStore} from "redux";
import contactsPageReducer from "./contacts-reducer";

let reducers = combineReducers({
    ContactsPage: contactsPageReducer,
});

let store = createStore(reducers);

export default store;

window.store = store; // Смотреть store в консоли