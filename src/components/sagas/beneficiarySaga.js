import { put } from 'redux-saga/effects';
import {ADD_BENEFICIARY_FAILED, ADD_BENEFICIARY_RESPONSE, FETCH_BENEFICIARY_FAILED, FETCH_BENEFICIARY_RESPONSE, BENEFICIARY_RESPONSE, BENEFICIARY_FAILED } from '../redux/types/beneficiaryType';

import callAPI from "../services/callAPI";
let api = new callAPI();

export function* beneficiarySaga({ payload, resolve }) {
    try {
        let data = yield api.Beneficiary(payload);
        if (data.status === 200) {
            yield put({ type: ADD_BENEFICIARY_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            yield put({ type: ADD_BENEFICIARY_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: ADD_BENEFICIARY_FAILED, payload: e })

    }
}


export function* beneficiaryDataSaga({ payload, resolve }) {
    try {
        let data = yield api.Beneficiaries(payload);
        if (data) {
            yield put({ type: FETCH_BENEFICIARY_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            yield put({ type: FETCH_BENEFICIARY_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: FETCH_BENEFICIARY_FAILED, payload: e })

    }
}


export function* beneficiaryDetailsSaga({ payload, resolve }) {
    console.log("payload beneficiaryDetailsSaga", payload)
    try {
        let data = yield api.BeneficiaryDetails(payload);
        if (data) {
            yield put({ type: BENEFICIARY_RESPONSE, payload: data })
            resolve && resolve(data)
        }
        else {
            yield put({ type: BENEFICIARY_FAILED, payload: data })
            resolve && resolve(data)
        }
    } catch (e) {
        yield put({ type: BENEFICIARY_FAILED, payload: e })

    }
}
