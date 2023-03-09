import { useLocation, useNavigate } from 'react-router-dom';
import { Explore, Home, Profile, Search } from '../../assets/icons';

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <nav>
            <div className='w-full h-20 fixed bottom-0 left-0 flex justify-center gap-10 py-[14px] shadow-navbar bg-white z-50'>
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
                <div
                    onClick={() => navigate('/profile')}
                    className='flex flex-col items-center gap-2'
                >
                    {(pathname === '/profile' && <Profile />) || <Profile dark />}
                    <p
                        className={`font-medium ${
                            pathname === '/profile'
                                ? 'text-dark-grey-base'
                                : 'text-dark-grey-placeholder'
                        }`}
                    >
                        Profilo
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
