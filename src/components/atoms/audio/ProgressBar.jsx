import { useEffect } from 'react';

import '../../../styles/slider-audio.css';

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
            const minutes = Math.floor(time / 60);
            const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
            const seconds = Math.floor(time % 60);
            const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    return (
        <div className='flex flex-col w-full gap-1'>
            <input
                type='range'
                ref={progressBarRef}
                defaultValue='0'
                onChange={handleProgressChange}
            />
            <div className='flex justify-between text-dark-grey-placeholder text-[8px]'>
                <p>{formatTime(timeProgress)}</p>
                <p>{formatTime(duration)}</p>
            </div>
        </div>
    );
};

export default ProgressBar;
