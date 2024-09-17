import { Suspense } from 'react';

import { useMount } from 'ahooks';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { hasAccessToken } from '../../store/auth/useAuth';
import { ROUTE_PATH } from '../../routes/route.constant';

function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    useMount(() => {
        const isLogin = hasAccessToken();
        if (!isLogin) {
            return navigate(ROUTE_PATH.LOG_IN);
        }

        if (location.pathname === '/') {
            navigate(ROUTE_PATH.LOG_IN);
        }
    });

    return (
        <Suspense fallback={undefined}>
            <Outlet />
        </Suspense>
    );
}

export default AppLayout;
