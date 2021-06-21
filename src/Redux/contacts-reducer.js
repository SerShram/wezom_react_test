const SET_USERS = 'SET-USERS';
const ELEMENT_COPY = 'ELEMENT-COPY';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
   //users: [],
   // pageSize: 20,
    //totalUserCount: 20,
    //currentPage: 1,
    //countPages: 20
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

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }

        default:
            return state;

    }
}
//----------------- Action creators ------------------------------
export const elementCopyAC = (elem) => ({type: ELEMENT_COPY, elem})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalUserCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUserCount: count})

export default contactsPageReducer;