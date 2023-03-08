const ProfileCard = ({ username, avatar }) => {
    return (
        <div className='flex flex-col items-center gap-2'>
            <img
                className='w-[90px] h-[90px] rounded-[50%]'
                src={avatar ? avatar : '/logo-default.svg'}
            />
            <p className='text-xs text-dark-grey-base'>{username}</p>
        </div>
    );
};

export default ProfileCard;
