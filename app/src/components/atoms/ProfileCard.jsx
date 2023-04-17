import { createSearchParams, useNavigate } from 'react-router-dom';
import STATIC_FILES from '../../utility/constants';

const ProfileCard = ({ props }) => {
    const navigate = useNavigate();

    const { username, avatar } = props;

    return (
        <div
            className='flex flex-col items-center gap-2'
            onClick={() =>
                navigate({
                    pathname: '/profile',
                    search: `?${createSearchParams({
                        user: username
                    })}`
                })
            }
        >
            <img
                crossOrigin='anonymous'
                className='w-[90px] h-[90px] rounded-[50%]'
                src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
            />
            <p className='text-xs text-dark-grey-base'>{username}</p>
        </div>
    );
};

export default ProfileCard;
