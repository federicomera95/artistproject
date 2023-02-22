import { useRef, useState } from 'react';

const AudioCard = ({ title, username, audio, thumbnail }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlayPause = () => {
        if (!audio) return;

        setIsPlaying(!isPlaying);

        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    };

    return (
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
                        <img className='h-3 w-3' src='/icons/play-pause-audio.svg' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1'>
                <p className='text-xs'>{title}</p>
                <p className='text-[8px]'>{username}</p>
            </div>
        </div>
    );
};

export default AudioCard;
