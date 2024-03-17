import {fetchAllUser} from "../../services/UserService";

const initState = {
    users: [
        {id: 1, name: 'Misen'},
        {id: 2, name: 'Anna'}
    ]
}
const rootReducer = async (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let {users} = state;
            users = users.filter(item => item.id !== action.payload.id);
            return {...state, users};
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000);
            let user = {
                id: id,
                name: `random - ${id}`
            };
            return {...state, users: [...state.users, user]};
        case 'ADD_USER':
            // let id = Math.floor(Math.random() * 1000);
            let newUser = {
                name: action.payload.name,
                job: action.payload.job
            };
            return {...state, newUser};
        case 'GET_USERS':
            let allUsers = action.payload.users;
            return {...state, allUsers};
        default:
            return state;
    }
}

export default rootReducer;