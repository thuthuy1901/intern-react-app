import TokenManager, { injectBearer } from 'brainless-token-manager';
import axios from 'axios';
import { API_PATH, BASE_API } from './constant';
import { Login } from '../store/constant';

const tokenManager = new TokenManager({
    getAccessToken: async () => {
        const token = localStorage.getItem(Login.Access_Token);
        return `${token}`;
    },
    getRefreshToken: async () => {
        const refreshToken = localStorage.getItem(Login.Refresh_Token);

        return `${refreshToken}`;
    },
    onInvalidRefreshToken: () => {
        localStorage.removeItem(Login.Access_Token);
        localStorage.removeItem(Login.Refresh_Token);
    },

    executeRefreshToken: async () => {
        const refreshToken = localStorage.getItem(Login.Refresh_Token);

        if (!refreshToken) {
            return {
                token: '',
                refresh_token: '',
            };
        }

        const response = await axiosInstant.post(API_PATH.REFRESH_TOKEN, {
            refreshToken,
        });
        const { accessToken: accessTokenNew, refreshToken: refreshTokenNew } =
            response.data;

        return {
            token: accessTokenNew,
            refresh_token: refreshTokenNew,
        };
    },
    onRefreshTokenSuccess: ({ token, refresh_token }) => {
        if (token && refresh_token) {
            localStorage.setItem(Login.Access_Token, token);
            localStorage.setItem(Login.Refresh_Token, refresh_token);
        }
    },
});

export const axiosInstant = axios.create({
    baseURL: BASE_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const tokenManagerInstance = async (
    request: any,
    suffixUrl: string,
    configs?: any
) => {
    const token: string = configs?.token
        ? configs?.token
        : ((await tokenManager.getToken()) as string);

    return request(suffixUrl, injectBearer(token, configs));
};
