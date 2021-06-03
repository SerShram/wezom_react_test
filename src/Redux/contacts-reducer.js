const SET_USERS = 'SET-USERS';
const ELEMENT_COPY = 'ELEMENT-COPY';

let initialState = {
    users: [
       /* {id: 1, ava: '2', firstname: 'Alex', lastname: 'Ivanov', age: '33', gender: 'Mr',  email: 'xxx@x', phone: '123-45-67', nation: 'Australian', location: {country: 'UA', address: 'Kiev',}},
        {id: 2, ava: '22', firstname: 'Glory', lastname: 'Petren', age: '45', gender: 'Mrs',  email: 'yyyyyyy@yy', phone: '099666-66-66', nation: 'British', location: {country: 'RU', address: 'Moscow',}},
        {id: 2, ava: '222', firstname: 'John', lastname: 'Black', age: '19', gender: 'Mr',  email: 'zzzz@zzzzzz', phone: '234-56-777', nation: 'Spanish', location: {country: 'EN', address: 'New-York',}},*/
    ],
};

const contactsPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ELEMENT_COPY:
            return state;

        case SET_USERS:
            return {...state, user: [...state.user, ...action.user]}

        default:
            return state;
    }
}

export const elementCopyAC = (elem) => ({ type: ELEMENT_COPY, elem })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default contactsPageReducer;