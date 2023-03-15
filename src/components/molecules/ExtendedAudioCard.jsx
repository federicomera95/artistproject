import { useRef, useState } from 'react';
import { PauseAudio, ToggleVideo } from '../../assets/icons';

const ExtendedAudioCard = ({
    title,
    username,
    avatar,
    audio,
    thumbnail,
    description,
    tags = []
}) => {
    const [maxDuration, setMaxDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const audioRef = useRef(null);

    const startInterval = () => {
        const id = setInterval(() => {
            setMaxDuration(audioRef.current?.duration);
            setCurrentTime(audioRef.current?.currentTime);
        }, 500);

        return id;
    };

    const togglePlayPause = () => {
        if (!audio) return;

        setIsPlaying((p) => !p);

        if (isPlaying) {
            audioRef.current.pause();
            clearInterval(intervalId);
        } else {
            audioRef.current.play();

            const id = startInterval();
            setIntervalId(id);
        }
    };

    const formatDuration = (seconds) => {
        let s = parseInt(seconds.toString().split('.')[0]);
        let m = 0;

        if (s >= 60) {
            if (s === 60) {
                s = 0;
                m = 1;
            } else {
                m = s % 60;
                s = s - m * 60;
            }
        }

        return `${m.toString().length > 1 ? '' : 0}${m}:${s.toString().length > 1 ? '' : 0}${s}`;
    };

    const getRight = () => {
        let res = parseInt(
            (100 * (parseInt(currentTime) || 0)) / (parseInt(maxDuration) || 1).toFixed(0)
        );

        res = res < 3 ? 3 : res;

        return res;
    };

    return (
        <div className='w-full flex flex-col rounded-lg shadow-card'>
            <div className='flex px-4 py-2 shadow-card-bot'>
                <div className='flex items-center gap-2'>
                    <img className='w-6 h-6' src={avatar ? avatar : '/logo-default.svg'} alt='' />
                    <h3 className='text-[10px] text-dark-grey-base'>{username}</h3>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-4 relative shadow-card-bot'>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-4'>
                        <img
                            className='w-12 h-12 rounded-lg'
                            src={thumbnail ? thumbnail : '/photo-default.svg'}
                        />
                        <div className='text-dark-grey-base text-xs'>
                            <h4 className='font-medium'>{title}</h4>
                            <p>{formatDuration(currentTime)}</p>
                        </div>
                    </div>
                    <div
                        className='flex flex-col items-center justify-center w-8 h-8 shadow-play-pause rounded-full cursor-pointer'
                        onClick={togglePlayPause}
                    >
                        {(isPlaying && <PauseAudio />) || <ToggleVideo />}
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <div className='relative'>
                        <div className='h-2 w-full absolute -z-10 rounded-lg bg-primary-background '></div>
                        <div
                            className={`h-2 w-[${getRight()}%] relative flex items-center justify-end rounded-lg bg-primary-base`}
                        >
                            <div className='h-3 w-3 min-w-[12px] rounded-full bg-white shadow-[0_2px_6px_0_rgba(147,51,234,0.3)]'></div>
                        </div>
                    </div>
                    <div className='flex justify-between text-dark-grey-placeholder text-[8px]'>
                        <p>{formatDuration(currentTime)}</p>
                        <p>{formatDuration(maxDuration)}</p>
                    </div>
                </div>
                <audio
                    ref={audioRef}
                    className='hidden'
                    onEnded={() => {
                        clearInterval(intervalId);
                        setCurrentTime(0);
                        setIsPlaying(false);
                    }}
                >
                    <source src={audio} type='audio/mp3' />
                </audio>
            </div>
            <div className='flex flex-col gap-2 px-4 py-3'>
                <p className='text-xs text-dark-grey-placeholder'>{description}</p>
                <div className='flex gap-1 items-center'>
                    {tags.map((tag, i) => (
                        <p
                            key={`${tag}-${i}`}
                            className='flex gap-1 items-center text-[10px] text-primary-base'
                        >
                            {tag}
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

/*
<div className='flex flex-col gap-2 text-dark-grey-base'>
            <div className='relative flex justify-center items-center h-[90px] w-[90px] rounded-lg bg-black'>
                <img src={thumbnail} className='rounded-lg' />
                <audio ref={audioRef} className='h-full w-full' onEnded={() => setIsPlaying(false)}>
                    <source src={audio} type='audio/mp3' />
                </audio>
                <div
                    className='flex absolute top-0 bottom-0 left-0 right-0 justify-center items-center'
                    onClick={togglePlayPause}
                >
                    <div
                        className='h-6 w-6 shadow-play-pause rounded-[50%] bg-white flex items-center justify-center cursor-pointer'
                        style={{ opacity: !!audio && isPlaying ? '0' : '1' }}
                    >
                        <div className='h-3 w-3'>
                            <ToggleAudio />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-xs'>{title}</p>
                <p className='text-[8px]'>{username}</p>
            </div>
        </div>
*/
