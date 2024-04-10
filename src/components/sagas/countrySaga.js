import { put } from 'redux-saga/effects';
import {COUNTRY_DATA_FAILED, COUNTRY_DATA_RESPONSE} from '../redux/types/countryType';
import { RESET_LOADER, START_LOADING } from '../redux/types/loader';

import callAPI from "../services/callAPI";
let api = new callAPI();

export function* countrySaga({ payload, resolve }) {
    try {
        yield put({ type: START_LOADING, isLoading: true })
        let data = yield api.Countries(payload);
        if (data.status === 200) {
            yield put({ type: COUNTRY_DATA_RESPONSE, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
        else {
            yield put({ type: COUNTRY_DATA_FAILED, payload: data })
            resolve && resolve(data)
            yield put({ type: RESET_LOADER, isLoading: false })
        }
    } catch (e) {
        yield put({ type: COUNTRY_DATA_FAILED, payload: e })

    }
}
