const SET_USERS = 'SET-USERS';

let initialState = {
  // users: [],
};

const contactsPageReducer = (state = initialState, action) => {

    switch (action.type) {

       /* case SET_USERS:
            //return {...state, users: [...state.users, ...action.users]} // Добавляем Users к уже существующим
            return {...state, users: action.users}*/

        default:
            return state;

    }
}
//----------------- Action creators ------------------------------
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default contactsPageReducer;