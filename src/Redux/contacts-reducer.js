const SET_USERS = 'SET-USERS';
const ELEMENT_COPY = 'ELEMENT-COPY';

let initialState = {
    users: [],

};

const contactsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ELEMENT_COPY:
            return state;

        case SET_USERS:
            //return {...state, users: [...state.users, ...action.users]} // Добавляем Users к уже существующим
            return {...state, users: [...action.users]}

        default:
            return state;
    }
}

export const elementCopyAC = (elem) => ({ type: ELEMENT_COPY, elem })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default contactsPageReducer;