import { useRef, useState } from 'react';
import { Bookmark, Cross, ToggleVideo } from '../../assets/icons';
import STATIC_FILES from '../../utility/constants';

const ContentVideo = ({ props, callback }) => {
    const { avatar, file, title, username, description, tags = [], thumbnail } = props;

    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (!file) return;

        setIsPlaying(!isPlaying);

        isPlaying ? videoRef.current.pause() : videoRef.current.play();
    };

    return (
        <div className='w-full flex flex-col gap-[19px]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[10px] justify-center items-center'>
                    <img
                        crossOrigin='anonymous'
                        className='w-[30px] h-[30px] rounded-[50%] object-cover bg-cover bg-center bg-no-repeat'
                        src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
                    />
                    <p className='first-letter:capitalize text-[14px] text-dark-grey-base'>
                        {username}
                    </p>
                </div>
                <div onClick={callback}>
                    <Cross dark />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='w-screen relative right-5 h-[221px]'>
                    {!isPlaying && !videoRef.current && (
                        <div className='bg-black absolute z-10  top-0 bottom-0 left-0 right-0 justify-center items-center'>
                            <img
                                crossOrigin='anonymous'
                                className='w-full h-[222px] absolute top-[-1px] right-0 object-contain'
                                src={
                                    thumbnail
                                        ? `${STATIC_FILES}/${thumbnail}`
                                        : '/cover-default.png'
                                }
                            />
                        </div>
                    )}
                    {!!file && (
                        <video
                            crossOrigin='anonymous'
                            ref={videoRef}
                            className='w-full h-full'
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src={`${STATIC_FILES}/${file}`} type='video/mp4' />
                        </video>
                    )}
                    <div
                        className='flex absolute z-10  top-0 bottom-0 left-0 right-0 justify-center items-center'
                        onClick={togglePlayPause}
                    >
                        <div
                            className='h-[42px] w-[42px] rounded-[50%] bg-white flex items-center justify-center cursor-pointer'
                            style={{ opacity: !!file && isPlaying ? '0' : '1' }}
                        >
                            <ToggleVideo w={21} h={21} />
                        </div>
                    </div>
                    <div
                        className='w-full absolute top-0 bottom-0 left-0 right-0'
                        style={{ opacity: !!file && isPlaying ? '0' : '1' }}
                    ></div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[14px] font-medium text-dark-grey-base'>{title}</p>
                    <Bookmark />
                </div>
                <p className='text-[12px] leading-[14.52px] text-dark-grey-base'>{description}</p>
                <div className='flex flex-wrap gap-1 items-center'>
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

export default ContentVideo;
