const SET_USERS = 'SET-USERS';
const ELEMENT_COPY = 'ELEMENT-COPY';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_PER_PAGE = 'SET-USERS-PER-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

let initialState = {
  users: [],
  currentPage: 1,
  usersPerPage: 6,
  isFetching: true

};

const contactsPageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ELEMENT_COPY:
      return state;

    case SET_USERS:
      //return {...state, users: [...state.users, ...action.users]} // Добавляем Users к уже существующим
      let userId = 0
      action.users.forEach(user => {
        user.userId = userId++
      })
      return {...state, users: action.users}

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }

    case SET_USERS_PER_PAGE:
      return {
        ...state,
        usersPerPage: action.usersPerPage
      }

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }

    default:
      return state;

  }
}
//----------------- Action creators ------------------------------
export const elementCopyAC = (elem) => ({type: ELEMENT_COPY, elem})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, currentPage: pageNumber})
export const setUsersPerPageAC = (quantity) => ({type: SET_USERS_PER_PAGE, usersPerPage: quantity})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching})

export default contactsPageReducer;