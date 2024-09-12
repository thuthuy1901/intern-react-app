import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, PostPage } from './layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';
import { ButtonToggleLanguage } from './component';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/post',
        element: <PostPage />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer />
            <ButtonToggleLanguage />
        </>
    );
}

export default App;
