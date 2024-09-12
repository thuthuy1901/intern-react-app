import { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { username } from '../store';
import useToast from './useToast';
import { BASE_API } from '../service/request';
import { useTranslation } from 'react-i18next';

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
                const response = await axios.post(`${BASE_API}/auth/login`, {
                    username,
                });

                if (response.data.accessToken) {
                    const { accessToken, refreshToken } = response.data;

                    localStorage.setItem('accessToken', accessToken);
                    localStorage.setItem('refreshToken', refreshToken);
                    localStorage.setItem('username', username);
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
