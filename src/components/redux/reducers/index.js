import { combineReducers } from 'redux';
import counter from './countReducer';
import countries from './countryReducer';
import user from './userReducer';
import beneficiary from './beneficiaryes';



export default combineReducers({
   counter,
   countries,
   user,
   beneficiary
})
