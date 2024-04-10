import { ADD_USER_RESPONSE, ADD_USER_FAILED, FETCH_USER_RESPONSE, FETCH_USER_FAILED } from "../types/userType";

const initialState = {
    user: null,
    users: null
}

const  reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_RESPONSE :
            return {...state, user: action.payload}
        case ADD_USER_FAILED:
            return {...state, user: {"message":"Not added"}}

        case FETCH_USER_RESPONSE :
            return {...state, users: action.payload }
        case FETCH_USER_FAILED:
            return {...state, users: null }

        default:
            return state
    }
}

export default reducer