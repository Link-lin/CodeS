// Default user action types
import {Action} from "redux";
export enum UserActionTypes{
    REGISTER_REQUEST, 
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT,

    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE
}

export interface IUserAction extends Action<UserActionTypes>{
    payload? :any;
}
