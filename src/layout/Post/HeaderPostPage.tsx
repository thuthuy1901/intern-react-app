import { memo } from 'react';
import { useLogout } from '../../hook';
import { useAtom } from 'jotai';
import { username } from '../../store';
import iconUser from '../../assets/userIcon.png';

const HeaderPostPage = memo(() => {
    const { onLogout } = useLogout();
    const [name] = useAtom(username);
    return (
        <header className="h-20 bg-white flex justify-end items-center gap-x-5 px-20">
            <div className="flex items-center gap-x-2">
                <img src={iconUser} alt="iconUser" />
                <p className="mb-0">{name}</p>
            </div>
            <button onClick={() => onLogout()}>Logout</button>
        </header>
    );
});

export default HeaderPostPage;
