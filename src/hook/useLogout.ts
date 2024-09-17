import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../routes/route.constant';
import { Login } from '../store/constant';

const useLogout = () => {
    const navigate = useNavigate();

    const onLogout = useCallback(() => {
        navigate(ROUTE_PATH.LOG_IN);
        localStorage.removeItem(Login.Access_Token);
        localStorage.removeItem(Login.Refresh_Token);
        localStorage.removeItem(Login.Username);
    }, [navigate]);

    return { onLogout };
};

export default useLogout;
