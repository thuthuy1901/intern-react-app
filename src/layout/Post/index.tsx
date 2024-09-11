import { useEffect } from 'react';
import { useAuth } from '../../hook';
import { useNavigate } from 'react-router-dom';
import HeaderPostPage from './HeaderPostPage';
import BodyPostPage from './BodyPostPage';

const PostPage = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <section className="min-w-screen min-h-screen h-fit bg-background">
            <HeaderPostPage />
            <BodyPostPage />
        </section>
    );
};

export default PostPage;
