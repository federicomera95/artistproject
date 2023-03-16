import { useRef } from 'react';
import { useState } from 'react';
import ProgressBar from './ProgressBar';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';

const AudioPlayer = ({ audio }) => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef();
    const progressBarRef = useRef();

    const handleAudioEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
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
            <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
        </>
    );
};

export default AudioPlayer;
