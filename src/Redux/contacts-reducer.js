const SET_USERS = 'SET-USERS';
const ELEMENT_COPY = 'ELEMENT-COPY';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
//const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const SET_USERS_PER_PAGE = 'SET-USERS-PER-PAGE';

let initialState = {
    users: [],
    currentPage: 1,
    usersPerPage: 6,
};

const contactsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ELEMENT_COPY:
            return state;

        case SET_USERS:
            //return {...state, users: [...state.users, ...action.users]} // Добавляем Users к уже существующим
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

       /* case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }*/
        case SET_USERS_PER_PAGE:
            return {
                ...state,
                usersPerPage: action.usersPerPage
            }

        default:
            return state;

    }
}
//----------------- Action creators ------------------------------
export const elementCopyAC = (elem) => ({type: ELEMENT_COPY, elem})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
//export const setTotalUserCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount: count})
export const setUsersPerPageAC = (quantity) => ({type: SET_USERS_PER_PAGE, usersPerPage: quantity})

export default contactsPageReducer;