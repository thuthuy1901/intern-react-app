import { Login } from '../constant';

export function hasAccessToken() {
    return !!localStorage.getItem(Login.Access_Token);
}

export function hasUserName() {
    return localStorage.getItem(Login.Username);
}
