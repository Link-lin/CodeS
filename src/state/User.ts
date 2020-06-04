import {Model} from './Helpers';

export interface IUser{
    email?: string;
    name?: string;
    password?: string;
    loggingIn?: boolean;
}

const UserModel = Model<IUser>({
    email: null,
    name: null,
    password: null,
    loggingIn: null
})

export class User extends UserModel {
    public static EMAIL = 'email';
    public static NAME = 'name';
    public static PASSWORD= 'password';
    public static LOGGINGIN= 'LOGGINGIN';

    public email: string;
    public name: string;
    public password: string;
    public logginIn: boolean;
}

