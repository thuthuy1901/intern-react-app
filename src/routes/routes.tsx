import { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { ROUTE_PATH } from './route.constant';
import AppLayout from '../layout/AppLayout/AppLayout';
import React from 'react';

const LoginPage = React.lazy(() => import('../pages/Login'));
const PostPage = React.lazy(() => import('../pages/Post'));

export const router = createBrowserRouter([
    {
        path: ROUTE_PATH.ROOT,
        element: <AppLayout />,
        children: [
            {
                path: ROUTE_PATH.LOG_IN,
                element: (
                    <Suspense fallback={undefined}>
                        <LoginPage />
                    </Suspense>
                ),
            },
            {
                path: ROUTE_PATH.POST,
                element: (
                    <Suspense fallback={undefined}>
                        <PostPage />
                    </Suspense>
                ),
            },
        ],
    },
]);
