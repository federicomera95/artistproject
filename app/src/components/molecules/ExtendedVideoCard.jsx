import { useState, useRef } from 'react';
import { ToggleVideo } from '../../assets/icons';
import { createSearchParams, useNavigate } from 'react-router-dom';
import STATIC_FILES from '../../utility/constants';

const ExtendedVideoCard = ({
    avatar,
    username,
    video,
    title,
    thumbnail,
    description,
    tags = []
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const navigate = useNavigate();

    const togglePlayPause = () => {
        if (!video) return;

        setIsPlaying(!isPlaying);

        isPlaying ? videoRef.current.pause() : videoRef.current.play();
    };

    return (
        <div className='w-full flex flex-col rounded-lg shadow-card'>
            <div className='flex px-4 py-2'>
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
                        crossOrigin='anonymous'
                        className='w-6 h-6 rounded-full'
                        src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
                        alt=''
                    />
                    <h3 className='text-[10px] text-dark-grey-base'>{username}</h3>
                </div>
            </div>
            <div className='relative h-[188px] bg-black'>
                {!!video && (
                    <video
                        crossOrigin='anonymous'
                        ref={videoRef}
                        className='w-full h-full rounded-lg'
                        onEnded={() => setIsPlaying(false)}
                    >
                        <source src={`${STATIC_FILES}/${video}`} type='video/mp4' />
                    </video>
                )}
                <h4
                    className='text-white text-sm font-medium absolute z-10 bottom-3 left-4'
                    style={{ opacity: !!video && isPlaying ? '0' : '1' }}
                >
                    {title}
                </h4>
                <div
                    className='flex absolute z-10  top-0 bottom-0 left-0 right-0 justify-center items-center'
                    onClick={togglePlayPause}
                >
                    <div
                        className='h-6 w-6 shadow-play-pause rounded-[50%] bg-white flex items-center justify-center cursor-pointer'
                        style={{ opacity: !!video && isPlaying ? '0' : '1' }}
                    >
                        <div className='h-3 w-3'>
                            <ToggleVideo />
                        </div>
                    </div>
                </div>
                <img
                    crossOrigin='anonymous'
                    className='w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-black object-contain'
                    style={{ opacity: !!video && isPlaying ? '0' : '1' }}
                    src={`${thumbnail ? `${STATIC_FILES}/${thumbnail}` : '/photo-default.svg'}`}
                    alt=''
                />
                <div
                    className='w-full absolute top-0 bottom-0 left-0 right-0 from-card-gradient-from to-card-gradient-to bg-gradient-to-b'
                    style={{ opacity: !!video && isPlaying ? '0' : '1' }}
                ></div>
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

export default ExtendedVideoCard;
