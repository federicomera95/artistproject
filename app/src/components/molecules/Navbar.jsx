import decode from 'jwt-decode';
import { useLocation, useNavigate, createSearchParams } from 'react-router-dom';
import { find, remove } from '../../utility/storage';

import { Explore, Home, Logout, Profile, Search } from '../../assets/icons';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { pathname, search } = location;

    const decoded = decode(find('token').token);

    return (
        <nav>
            <div className='w-full h-20 fixed bottom-[-1px] left-0 flex justify-center gap-10 py-[14px] shadow-navbar bg-white z-30'>
                <div onClick={() => navigate('/home')} className='flex flex-col items-center gap-2'>
                    {(pathname === '/home' && <Home />) || <Home dark />}
                    <p
                        className={`font-medium ${
                            pathname === '/home'
                                ? 'text-dark-grey-base'
                                : 'text-dark-grey-placeholder'
                        }`}
                    >
                        Home
                    </p>
                </div>
                <div
                    onClick={() => navigate('/search')}
                    className='flex flex-col items-center gap-2'
                >
                    {(pathname === '/search' && <Search />) || <Search dark />}
                    <p
                        className={`font-medium ${
                            pathname === '/search'
                                ? 'text-dark-grey-base'
                                : 'text-dark-grey-placeholder'
                        }`}
                    >
                        Cerca
                    </p>
                </div>
                <div
                    onClick={() => navigate('/explore')}
                    className='flex flex-col items-center gap-2'
                >
                    {(pathname === '/explore' && <Explore />) || <Explore dark />}
                    <p
                        className={`font-medium ${
                            pathname === '/explore'
                                ? 'text-dark-grey-base'
                                : 'text-dark-grey-placeholder'
                        }`}
                    >
                        Esplora
                    </p>
                </div>
                {(decoded.type === 'artist' && (
                    <div
                        onClick={() =>
                            navigate({
                                pathname: '/profile',
                                search: `?${createSearchParams({
                                    user: decoded.username
                                })}`
                            })
                        }
                        className='flex flex-col items-center gap-2'
                    >
                        {(search.includes(decoded.username) && <Profile />) || <Profile dark />}
                        <p
                            className={`font-medium ${
                                search.includes(decoded.username)
                                    ? 'text-dark-grey-base'
                                    : 'text-dark-grey-placeholder'
                            }`}
                        >
                            Profilo
                        </p>
                    </div>
                )) || (
                    <div
                        onClick={() => {
                            remove('token');
                            navigate('/login');
                        }}
                        className='flex flex-col items-center gap-2'
                    >
                        <Logout dark />
                        <p
                            className={`font-medium ${
                                search.includes(decoded.username)
                                    ? 'text-dark-grey-base'
                                    : 'text-dark-grey-placeholder'
                            }`}
                        >
                            Logout
                        </p>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
