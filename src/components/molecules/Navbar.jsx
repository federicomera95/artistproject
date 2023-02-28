import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    return (
        <nav>
            <div className='w-full h-20 fixed bottom-0 left-0 flex justify-center gap-10 py-[14px] shadow-navbar bg-white'>
                <div onClick={() => navigate('/home')} className='flex flex-col items-center gap-2'>
                    <img src={`/icons/home.svg`}></img>
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
                    <img src='/icons/search.svg'></img>
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
                    <img src='/icons/explore.svg'></img>
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
                    <img src='/icons/profile.svg'></img>
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
