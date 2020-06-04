import { combineReducers } from "redux"
// All the reducers nessasary are put in here 
import { AuthenticationReducer } from './AuthenticationReducer';
const rootReducer = combineReducers({
    authentication: AuthenticationReducer
})

export default rootReducer;