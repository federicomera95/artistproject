import { useRef } from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import STATIC_FILES from '../../../utility/constants';

const ExtendedAudioPlayer = ({ audio, thumbnail, title }) => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef();
    const progressBarRef = useRef();

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

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <img
                        className='w-12 h-12 rounded-lg'
                        src={thumbnail ? `${STATIC_FILES}/${thumbnail}` : '/photo-default.svg'}
                    />
                    <div className='text-dark-grey-base text-xs'>
                        <h4 className='font-medium'>{title}</h4>
                        <p>{formatTime(timeProgress)} minuti</p>
                    </div>
                </div>
                <DisplayTrack
                    {...{
                        audio,
                        audioRef,
                        setDuration,
                        progressBarRef,
                        handleAudioEnded
                    }}
                />
                <Controls
                    {...{
                        audioRef,
                        progressBarRef,
                        duration,
                        setTimeProgress,
                        isPlaying,
                        setIsPlaying
                    }}
                />
            </div>
            <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
        </>
    );
};

export default ExtendedAudioPlayer;
