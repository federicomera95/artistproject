const Navbar = () => {
    const handleClick = ({ target }) => {
        // Navigation to pages
    };

    return (
        <nav className='w-full h-20 fixed bottom-0 flex justify-center gap-10 py-[14px] shadow-navbar'>
            <div onClick={handleClick} className='flex flex-col items-center gap-2'>
                <img src={`/icons/home.svg`}></img>
                <p className='font-medium text-base text-dark-grey-base'>Home</p>
            </div>
            <div onClick={handleClick} className='flex flex-col items-center gap-2'>
                <img src='/icons/search.svg'></img>
                <p className='font-medium text-base text-dark-grey-base'>Cerca</p>
            </div>
            <div onClick={handleClick} className='flex flex-col items-center gap-2'>
                <img src='/icons/explore.svg'></img>
                <p className='font-medium text-base text-dark-grey-base'>Esplora</p>
            </div>
            <div onClick={handleClick} className='flex flex-col items-center gap-2'>
                <img src='/icons/profile.svg'></img>
                <p className='font-medium text-base text-dark-grey-base'>Profilo</p>
            </div>
        </nav>
    );
};

export default Navbar;
