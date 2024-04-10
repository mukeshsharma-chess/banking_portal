import { REQUEST_ADD_BENEFICIARY, REQUEST_BENEFICIARY, REQUEST_FETCH_BENEFICIARY } from "../types/beneficiaryType";

export const addBeneficiayAction = (data) => ({
    type: REQUEST_ADD_BENEFICIARY,
    payload: data
})


export const fetchBeneficiayAction = () => ({
    type: REQUEST_FETCH_BENEFICIARY,
})


export const beneficiaryDetailsAction = (data) => ({
    type: REQUEST_BENEFICIARY,
    payload: data
})

