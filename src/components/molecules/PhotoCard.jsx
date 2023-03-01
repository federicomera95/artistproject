const PhotoCard = ({ username, title, avatar, image }) => {
    return (
        <div className='flex flex-col gap-2 text-dark-grey-base'>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                    <img
                        className='w-5 h-5 rounded-[50%]'
                        src={avatar ? avatar : '/logo-default.svg'}
                    />
                    <p className='text-[10px]'>{username}</p>
                </div>
                <div className='flex gap-4'>
                    <img
                        className='w-[150px] h-[150px] rounded-lg'
                        src={image ? image : '/photo-default.svg'}
                    />
                </div>
            </div>
            <p className='text-[12px]'>{title}</p>
        </div>
    );
};

export default PhotoCard;
