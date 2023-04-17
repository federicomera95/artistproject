import { createSearchParams, useNavigate } from 'react-router-dom';
import STATIC_FILES from '../../utility/constants';

const PhotoCard = ({ props, callback }) => {
    const { username, title, avatar, thumbnail } = props;

    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-2 text-dark-grey-base' onClick={() => callback(props)}>
            <div className='flex flex-col gap-1'>
                <div
                    className='flex items-center gap-1'
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
                        className='w-5 h-5 rounded-[50%]'
                        src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
                    />
                    <p className='text-[10px]'>{username}</p>
                </div>
                <div className='flex gap-4'>
                    <img
                        className='w-[150px] h-[150px] rounded-lg'
                        src={thumbnail ? `${STATIC_FILES}/${thumbnail}` : '/photo-default.svg'}
                    />
                </div>
            </div>
            <p className='text-[12px]'>{title}</p>
        </div>
    );
};

export default PhotoCard;
