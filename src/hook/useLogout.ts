import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        navigate('/');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('username');
    }, [navigate]);

    return { onLogout };
};

export default useLogout;
