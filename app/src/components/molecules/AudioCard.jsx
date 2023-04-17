import { createSearchParams, useNavigate } from 'react-router-dom';
import { ToggleAudio } from '../../assets/icons';
import STATIC_FILES from '../../utility/constants';

const AudioCard = ({ props, callback }) => {
    const { title, username, thumbnail } = props;

    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-2 text-dark-grey-base' onClick={() => callback(props)}>
            <div className='relative flex justify-center items-center h-[90px] w-[90px] rounded-lg'>
                <img
                    src={thumbnail ? `${STATIC_FILES}/${thumbnail}` : '/photo-default.svg'}
                    className='rounded-lg'
                />
                <div className='flex absolute top-0 bottom-0 left-0 right-0 justify-center items-center'>
                    <div
                        className='h-6 w-6 shadow-play-pause rounded-[50%] bg-white flex items-center justify-center cursor-pointer'
                        style={{ opacity: '1' }}
                    >
                        <div className='h-3 w-3'>
                            <ToggleAudio />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-xs'>{title}</p>
                <p
                    className='text-[8px]'
                    onClick={() =>
                        navigate({
                            pathname: '/profile',
                            search: `?${createSearchParams({
                                user: username
                            })}`
                        })
                    }
                >
                    {username}
                </p>
            </div>
        </div>
    );
};

export default AudioCard;
