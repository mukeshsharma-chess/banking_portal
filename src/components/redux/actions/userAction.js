import { REQUEST_ADD_USER, REQUEST_FETCH_USER } from "../types/userType";

export const addUserAction = (data) => ({
    type: REQUEST_ADD_USER,
    payload: data
})


export const fetchUserAction = () => ({
    type: REQUEST_FETCH_USER,
})

