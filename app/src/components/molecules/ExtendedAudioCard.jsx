import { createSearchParams, useNavigate } from 'react-router-dom';
import ExtendedAudioPlayer from '../atoms/audio/ExtendedAudioPlayer';
import STATIC_FILES from '../../utility/constants';

const ExtendedAudioCard = ({
    title,
    username,
    avatar,
    audio,
    thumbnail,
    description,
    tags = []
}) => {
    const navigate = useNavigate();

    return (
        <div className='w-full flex flex-col rounded-lg shadow-card'>
            <div className='flex px-4 py-2 shadow-card-bot'>
                <div
                    className='flex items-center gap-2'
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
                        className='w-6 h-6'
                        src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
                        alt=''
                    />
                    <h3 className='text-[10px] text-dark-grey-base'>{username}</h3>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-4 relative shadow-card-bot'>
                <ExtendedAudioPlayer audio={audio} title={title} thumbnail={thumbnail} />
            </div>
            <div className='flex flex-col gap-2 px-4 py-3'>
                <p className='text-xs text-dark-grey-placeholder'>{description}</p>
                <div className='flex gap-1 items-center'>
                    {tags.map((tag, i) => (
                        <p
                            key={`${tag}-${i}`}
                            className='flex gap-1 items-center text-[10px] text-primary-base'
                        >
                            <span className='first-letter:capitalize'>{tag}</span>
                            {i !== tags.length - 1 && (
                                <span className='text-[12px] text-black'>•</span>
                            )}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExtendedAudioCard;
