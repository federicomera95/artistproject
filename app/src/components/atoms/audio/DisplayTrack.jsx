import STATIC_FILES from '../../../utility/constants';

const DisplayTrack = ({ audio, audioRef, setDuration, progressBarRef, handleAudioEnded }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <audio
            crossOrigin='anonymous'
            src={`${STATIC_FILES}/${audio}`}
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleAudioEnded}
        />
    );
};

export default DisplayTrack;
