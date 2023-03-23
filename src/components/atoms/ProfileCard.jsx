import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ props }) => {
    const navigate = useNavigate();

    const { username, avatar, path } = props;

    return (
        <div className='flex flex-col items-center gap-2' onClick={() => navigate(`/profile`)}>
            {/*`/profile/id` */}
            <img
                className='w-[90px] h-[90px] rounded-[50%]'
                src={avatar ? avatar : '/logo-default.svg'}
            />
            <p className='text-xs text-dark-grey-base'>{username}</p>
        </div>
    );
};

export default ProfileCard;
