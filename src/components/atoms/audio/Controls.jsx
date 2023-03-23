import { useEffect, useRef, useCallback } from 'react';
import { PauseAudio, ToggleVideo } from '../../../assets/icons';

const Controls = ({
    audioRef,
    progressBarRef,
    duration,
    setTimeProgress,
    isPlaying,
    setIsPlaying
}) => {
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        const currentTime = audioRef?.current?.currentTime;
        setTimeProgress(currentTime);
        if (progressBarRef?.current?.value) progressBarRef.current.value = currentTime;

        if (progressBarRef?.current?.style) {
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(progressBarRef.current.value / duration) * 100}%`
            );
        }

        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    return (
        <div
            className='pl-[2px] flex flex-col items-center justify-center w-8 h-8 shadow-play-pause rounded-full cursor-pointer'
            onClick={togglePlayPause}
        >
            {(isPlaying && <PauseAudio />) || <ToggleVideo w={18} h={18} />}
        </div>
    );
};

export default Controls;
