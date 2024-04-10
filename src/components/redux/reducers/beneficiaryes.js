import { ADD_BENEFICIARY_RESPONSE, ADD_BENEFICIARY_FAILED, FETCH_BENEFICIARY_RESPONSE, FETCH_BENEFICIARY_FAILED, BENEFICIARY_RESPONSE, BENEFICIARY_FAILED } from "../types/beneficiaryType";

const initialState = {
    beneficiary: null,
    beneficiaries: null,
    beneficiaryDetails: null
}

const  reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BENEFICIARY_RESPONSE :
            return {...state, beneficiary: action.payload}
        case ADD_BENEFICIARY_FAILED:
            return {...state, beneficiary: {"message":"Not added"}}

        case FETCH_BENEFICIARY_RESPONSE :
            return {...state, beneficiaries: action.payload }
        case FETCH_BENEFICIARY_FAILED:
            return {...state, beneficiaries: null }

        case BENEFICIARY_RESPONSE :
            return {...state, beneficiaryDetails: action.payload }
        case BENEFICIARY_FAILED:
            return {...state, beneficiaryDetails: null }

        default:
            return state
    }
}

export default reducer