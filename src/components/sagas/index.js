import { takeEvery, all } from 'redux-saga/effects';
import { countrySaga } from './countrySaga';
import { userDataSaga, userSaga } from './userSaga';
import { REQUEST_ADD_USER, REQUEST_FETCH_USER } from '../redux/types/userType';
import { REQUEST_COUNTRY_DATA } from '../redux/types/countryType';
import { REQUEST_ADD_BENEFICIARY, REQUEST_BENEFICIARY, REQUEST_FETCH_BENEFICIARY } from '../redux/types/beneficiaryType';
import { beneficiaryDataSaga, beneficiaryDetailsSaga, beneficiarySaga } from './beneficiarySaga';



function* rootSaga() {
    yield all([
        takeEvery(REQUEST_ADD_USER, userSaga ),
        takeEvery(REQUEST_COUNTRY_DATA, countrySaga ),
        takeEvery(REQUEST_FETCH_USER, userDataSaga ),
        takeEvery(REQUEST_FETCH_BENEFICIARY, beneficiaryDataSaga ),
        takeEvery(REQUEST_ADD_BENEFICIARY, beneficiarySaga ),
        takeEvery(REQUEST_BENEFICIARY, beneficiaryDetailsSaga ),
    ]);
}

export default rootSaga;