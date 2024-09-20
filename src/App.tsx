import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';
import { ButtonToggleLanguage } from './component';
import { router } from './routes/routes';

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
