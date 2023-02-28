import { useRef, useState } from 'react';

const VideoCard = ({ avatar, name, video, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const togglePlayPause = () => {
        if (!video) return;

        setIsPlaying(!isPlaying);

        isPlaying ? videoRef.current.pause() : videoRef.current.play();
    };

    return (
        <div className='flex flex-col gap-2 '>
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                    <img className='w-5 h-5' src={avatar ? avatar : '/logo-default.svg'} />
                    <p className='text-[10px] font-normal text-dark-grey-base'>{name}</p>
                </div>
                <div className='relative w-[150px] h-[84px] rounded-lg border-[1px] border-primary-background bg-black'>
                    {!!video && (
                        <video
                            ref={videoRef}
                            className='w-full h-full rounded-lg'
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src={video} type='video/mp4' />
                        </video>
                    )}
                    <div
                        className='flex absolute top-0 bottom-0 left-0 right-0 justify-center items-center'
                        onClick={togglePlayPause}
                    >
                        <div
                            className='h-6 w-6 shadow-play-pause rounded-[50%] bg-white flex items-center justify-center cursor-pointer'
                            style={{ opacity: !!video && isPlaying ? '0' : '1' }}
                        >
                            <img className='h-3 w-3' src='/icons/play-pause.svg' />
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-xs font-normal text-dark-grey-base'>{title}</p>
        </div>
    );
};

export default VideoCard;
