import { useEffect } from 'react';
import { axiosInstant, tokenManagerInstance } from '../../service/request';
import { useAtom } from 'jotai';
import { allInfoPost } from '../../store';
import ListPost from './ListPost';

const BodyPostPage = () => {
    const [_, setAllInfoPost] = useAtom(allInfoPost);

    const fetchPosts = async () => {
        try {
            const respond = await tokenManagerInstance(
                axiosInstant.get,
                '/posts'
            );
            setAllInfoPost(respond.data);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="px-[85px] py-2">
            <h1 className="text-[32px] leading-10 mb-2">Post</h1>
            <ListPost />
        </div>
    );
};

export default BodyPostPage;
