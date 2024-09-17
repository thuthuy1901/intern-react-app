import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import useToast from './useToast';
import { useTranslation } from 'react-i18next';
import { username } from '../store/jotai';
import { Login } from '../store/constant';
import { API_PATH } from '../api/constant';

const useLogin = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [_, setUser] = useAtom(username);
    const { notifySuccess, notifyError } = useToast();

    const onLogin = useCallback(
        async (username: string) => {
            setIsLoading(true);
            try {
                const response = await axios.post(API_PATH.AUTH_LOGIN, {
                    username,
                });

                if (response.data.accessToken) {
                    const { accessToken, refreshToken } = response.data;

                    localStorage.setItem(Login.Access_Token, accessToken);
                    localStorage.setItem(Login.Refresh_Token, refreshToken);
                    localStorage.setItem(Login.Username, username);
                    setUser(username);
                    notifySuccess(t('toast.succ'));

                    navigate('/post');
                } else {
                    throw new Error('Login fail');
                }
            } catch {
                notifyError(t('toast.err'));
            } finally {
                setIsLoading(false);
            }
        },
        [navigate, setUser]
    );

    return { onLogin, isLoading };
};

export default useLogin;
