import { useRef, useState } from 'react';
import ExtendedAudioPlayer from '../atoms/audio/ExtendedAudioPlayer';

const ExtendedAudioCard = ({
    title,
    username,
    avatar,
    audio,
    thumbnail,
    description,
    tags = []
}) => {
    return (
        <div className='w-full flex flex-col rounded-lg shadow-card'>
            <div className='flex px-4 py-2 shadow-card-bot'>
                <div className='flex items-center gap-2'>
                    <img className='w-6 h-6' src={avatar ? avatar : '/logo-default.svg'} alt='' />
                    <h3 className='text-[10px] text-dark-grey-base'>{username}</h3>
                </div>
            </div>
            <div className='flex flex-col gap-4 p-4 relative shadow-card-bot'>
                <ExtendedAudioPlayer audio={audio} title={title} thumbnail={thumbnail} />
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
