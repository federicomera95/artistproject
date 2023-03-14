import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, Cross, Edit, Logout, Microphone, Photo } from '../assets/icons';

import Button from '../components/atoms/Button';
import AudioCard from '../components/molecules/AudioCard';
import ExtendedVideoCard from '../components/molecules/ExtendedVideoCard';
import PhotoCard from '../components/molecules/PhotoCard';

const navigation = ['Tutti', 'Foto', 'Audio', 'Video'];

const contents = [
    {
        type: 'foto',
        username: 'Matteo',
        title: 'Foto bellissima',
        avatar: '',
        image: ''
    },
    {
        type: 'audio',
        username: 'Matteo',
        title: 'Audio bellissimo',
        thumbnail: '',
        audio: ''
    },
    {
        type: 'audio',
        username: 'Matteo',
        title: 'Audio bruttissimo',
        thumbnail: '',
        audio: ''
    },
    {
        type: 'foto',
        username: 'Matteo',
        title: 'Foto brutta',
        avatar: '',
        image: ''
    },
    {
        type: 'video',
        name: 'Matteo',
        title: 'Video bellissimo',
        tags: ['Rock', 'Blues', 'Chitarra'],
        description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        avatar: '',
        video: '/media/sample-video.mp4'
    },
    {
        type: 'foto',
        username: 'Giuseppe',
        title: 'Anche oggi viva la legalità',
        avatar: '',
        image: ''
    },
    {
        type: 'video',
        name: 'Matteo',
        title: 'Video bellissimo',
        tags: ['Rock', 'Blues', 'Chitarra'],
        description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        avatar: '',
        video: '/media/sample-video-2.mp4'
    },
    {
        type: 'video',
        name: 'Matteo',
        title: 'Video bellissimo',
        tags: ['Rock', 'Blues', 'Chitarra'],
        description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        avatar: '',
        video: '/media/sample-video-3.mp4'
    }
];

const Profile = () => {
    const [currentPage, setCurrentPage] = useState('tutti');
    const [isSelectContentOpen, setSelectContentOpen] = useState(false);

    const navigate = useNavigate();

    const handleProfileNav = ({ target }) => {
        if (currentPage === target.id) return;

        setCurrentPage(target.id);
    };

    const getContent = (type) => {
        switch (type) {
            case 'tutti':
                return contents;

            case 'foto':
                return contents.filter((c) => c.type === 'foto');
            case 'audio':
                return contents.filter((c) => c.type === 'audio');

            case 'video':
                return contents.filter((c) => c.type === 'video');
            default:
                throw new Error(`Invalid content type 'type'`);
        }
    };

    const openSelectContent = () => {
        setSelectContentOpen((status) => !status);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className='flex flex-col gap-6 relative bottom-5'>
            <div className='flex flex-col gap-8'>
                <div className='flex flex-col gap-6'>
                    <div
                        className='bg-gradient-to-br from-profile-gradient-from to-profile-gradient-to to h-[208px] w-screen rounded-b-[20px]
                        relative right-5 flex justify-between items-start pt-12 px-5'
                    >
                        <div className='w-6' onClick={handleLogout}>
                            <Logout />
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                            <img src='/logo-default.svg' />
                            <p className='text-white'>{`Nome d'arte`}</p>
                        </div>
                        <div className='w-6' onClick={() => navigate('/profile/edit')}>
                            <Edit />
                        </div>
                    </div>
                    <p className='text-sm font-normal'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet.
                    </p>
                    <Button
                        text='Modifica i tuoi link'
                        style='secondary'
                        size='large'
                        callback={() => navigate('/profile/links')}
                    />
                </div>
                <div className='w-screen relative right-5 flex justify-between text-center'>
                    {navigation.map((nav, i) => (
                        <p
                            key={`${nav}-${i}`}
                            id={nav.toLowerCase()}
                            className={`w-1/4 px-[10px] py-3 font-medium border-b border-dark-grey-disabled ${
                                currentPage === nav.toLowerCase()
                                    ? 'border-b-[2px] border-b-primary-base'
                                    : ''
                            }`}
                            onClick={handleProfileNav}
                        >
                            {nav}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex flex-col gap-6 pb-20'>
                <p className='font-medium text-dark-grey-placeholder'>
                    <span className='font-bold text-dark-grey-base'>
                        {getContent(currentPage).length}
                    </span>{' '}
                    Contenuti {currentPage === 'tutti' ? 'totali' : currentPage}
                </p>
                <div className='flex flex-col gap-4'>
                    {getContent(currentPage).map((content, i) => {
                        switch (content.type) {
                            case 'foto':
                                return (
                                    <PhotoCard
                                        key={`${content.title}-${i}`}
                                        avatar={content.avatar}
                                        image={content.image}
                                        title={content.title}
                                        username={content.username}
                                    />
                                );
                            case 'audio':
                                return (
                                    <AudioCard
                                        key={`${content.title}-${i}`}
                                        username={content.username}
                                        title={content.title}
                                        thumbnail={content.thumbnail}
                                        audio={content.audio}
                                    />
                                );
                            case 'video':
                                return (
                                    <ExtendedVideoCard
                                        key={`${content.title}-${i}`}
                                        name={content.name}
                                        title={content.title}
                                        description={content.description}
                                        avatar={content.avatar}
                                        video={content.video}
                                        tags={content.tags}
                                    />
                                );
                        }
                    })}
                </div>
            </div>
            {isSelectContentOpen && (
                <div className='w-screen h-screen fixed left-0 top-0 z-20 backdrop-blur-[4px]'></div>
            )}
            <div
                className={`flex flex-col items-end gap-5 fixed z-30 bottom-[100px] right-5 rounded-full`}
                onClick={openSelectContent}
            >
                {isSelectContentOpen && (
                    <div className='flex flex-col gap-4 font-medium'>
                        <div
                            className='flex items-center p-3 gap-2 rounded-lg border border-dark-grey-disabled bg-white'
                            onClick={() => navigate('/profile/add-audio')}
                        >
                            <Microphone />
                            <span>Audio</span>
                        </div>
                        <div
                            className='flex items-center p-3 gap-2 rounded-lg border border-dark-grey-disabled bg-white'
                            onClick={() => navigate('/profile/add-video')}
                        >
                            <Camera />
                            <span>Video</span>
                        </div>
                        <div
                            className='flex items-center p-3 gap-2 rounded-lg border border-dark-grey-disabled bg-white'
                            onClick={() => navigate('/profile/add-photo')}
                        >
                            <Photo />
                            <span>Photo</span>
                        </div>
                    </div>
                )}
                <div
                    className={`p-[14px] rounded-full shadow-play-pause bg-primary-base transition-all ${
                        isSelectContentOpen ? 'bg-dark-grey-placeholder' : 'rotate-45'
                    }`}
                >
                    <Cross />
                </div>
            </div>
        </div>
    );
};

export default Profile;
