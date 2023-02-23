import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <div className='w-full h-20 fixed bottom-0 left-0 flex justify-center gap-10 py-[14px] shadow-navbar'>
                <div onClick={() => navigate('/home')} className='flex flex-col items-center gap-2'>
                    <img src={`/icons/home.svg`}></img>
                    <p className='font-medium text-base text-dark-grey-base'>Home</p>
                </div>
                <div
                    onClick={() => navigate('/search')}
                    className='flex flex-col items-center gap-2'
                >
                    <img src='/icons/search.svg'></img>
                    <p className='font-medium text-base text-dark-grey-base'>Cerca</p>
                </div>
                <div
                    onClick={() => navigate('/explore')}
                    className='flex flex-col items-center gap-2'
                >
                    <img src='/icons/explore.svg'></img>
                    <p className='font-medium text-base text-dark-grey-base'>Esplora</p>
                </div>
                <div
                    onClick={() => navigate('/profile')}
                    className='flex flex-col items-center gap-2'
                >
                    <img src='/icons/profile.svg'></img>
                    <p className='font-medium text-base text-dark-grey-base'>Profilo</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
