import {UserActionTypes, IUserAction}from '../actions/UserActionsTypes';
import {User} from '../state/User';


export const AuthenticationReducer = (state: User = null, action: IUserAction): User =>{
    switch(action.type){
        case UserActionTypes.LOGIN_REQUEST:
            return {
                logginIn: true,
                ...state,
            }
        case UserActionTypes.LOGIN_SUCCESS:
            return {
                logginIn: true,
                ...state,
            }
        case UserActionTypes.LOGIN_FAILURE:
            return null;
        case UserActionTypes.LOGOUT:
            return null;
        default:
            return state
 
    }
}