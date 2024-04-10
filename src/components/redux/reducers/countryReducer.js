import {
    COUNTRY_DATA_RESPONSE,
    COUNTRY_DATA_FAILED
} from "../types/countryType";

const initialState = {
    countries: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COUNTRY_DATA_RESPONSE:
            return { ...state, countries: action.payload.data }
        case COUNTRY_DATA_FAILED:
            return { ...state, isLoading: null }
        default:
            return state
    }
}
