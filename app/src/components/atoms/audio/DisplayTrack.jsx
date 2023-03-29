const DisplayTrack = ({ audio, audioRef, setDuration, progressBarRef, handleAudioEnded }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <audio
            src={audio}
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
            onEnded={handleAudioEnded}
        />
    );
};

export default DisplayTrack;
