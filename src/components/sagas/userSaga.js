import { put } from 'redux-saga/effects';
import {ADD_USER_FAILED, ADD_USER_RESPONSE, FETCH_USER_FAILED, FETCH_USER_RESPONSE} from '../redux/types/userType';
import { RESET_LOADER, START_LOADING } from '../redux/types/loader';

import callAPI from "../services/callAPI";
let api = new callAPI();

export function* userSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.User(payload);
        if (data.status === 200) {
            yield put({ type: ADD_USER_RESPONSE, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            yield put({ type: ADD_USER_FAILED, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: ADD_USER_FAILED, payload: e })

    }
}


export function* userDataSaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.Users(payload);
        if (data) {
            yield put({ type: FETCH_USER_RESPONSE, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            yield put({ type: FETCH_USER_FAILED, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: FETCH_USER_FAILED, payload: e })

    }
}
