import '../styles/hide-scrollbar.css';

import ProfileCard from '../components/atoms/ProfileCard';
import PhotoCard from '../components/molecules/PhotoCard';
import VideoCard from '../components/molecules/VideoCard';
import AudioCard from '../components/molecules/AudioCard';
import GenreCard from '../components/molecules/GenreCard';
import { useCallback, useState } from 'react';
import ContentAudio from '../components/molecules/ContentAudio';
import ContentVideo from '../components/molecules/ContentVideo';
import ContentPhoto from '../components/molecules/ContentPhoto';

const Home = () => {
    //call api
    const contents = [
        {
            id: 1,
            type: 'photo',
            username: 'Giuseppe',
            title: 'Anche oggi viva la legalità',
            avatar: '',
            image: '',
            tags: ['Rock', 'Blues', 'Chitarra'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 2,
            type: 'audio',
            avatar: '',
            username: 'Matteo',
            title: 'Audio bellissimo',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            thumbnail: '',
            audio: '/media/town-10169.mp3',
            tags: ['Rock', 'Blues', 'Chitarra']
        },
        {
            id: 3,
            type: 'audio',
            avatar: '',
            username: 'Matteo',
            title: 'Audio bruttissimo',
            thumbnail: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            audio: '/media/town-10169.mp3',
            tags: ['Rock', 'Blues', 'Chitarra']
        },
        {
            type: 'profile',
            username: "Nome d'arte",
            avatar: '',
            path: 11
        },
        {
            id: 4,
            type: 'photo',
            username: 'Giuseppe',
            title: 'Anche oggi viva la legalità',
            avatar: '',
            image: '',
            tags: ['Rock', 'Blues', 'Chitarra'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            id: 5,
            type: 'video',
            username: 'Matteo',
            title: 'Video bellissimo',
            tags: ['Rock', 'Blues', 'Chitarra'],
            thumbnail: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            avatar: '',
            video: '/media/sample-video.mp4'
        },
        {
            type: 'profile',
            username: "Nome d'arte",
            avatar: '',
            path: 10
        },
        {
            id: 6,
            type: 'photo',
            username: 'Giuseppe',
            title: 'Anche oggi viva la legalità',
            avatar: '',
            image: '',
            tags: ['Rock', 'Blues', 'Chitarra'],
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            type: 'profile',
            username: "Nome d'arte",
            avatar: '',
            path: 12
        },
        {
            id: 7,
            type: 'video',
            username: 'Matteo',
            title: 'Video bellissimo',
            tags: ['Rock', 'Blues', 'Chitarra'],
            thumbnail: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            avatar: '',
            video: '/media/sample-video-2.mp4'
        },
        {
            id: 8,
            type: 'video',
            username: 'Matteo',
            title: 'Video bellissimo',
            tags: ['Rock', 'Blues', 'Chitarra'],
            thumbnail: '',
            description:
                'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            avatar: '',
            video: '/media/sample-video-3.mp4'
        }
    ];

    const [prop, setProp] = useState({});
    const [open, setModal] = useState(false);

    const openModal = useCallback((content) => {
        setProp(content);
        setModal(true);
    }, []);

    const closeModal = useCallback(() => {
        setModal(false);
    }, []);

    const switchContent = (type) => {
        switch (type) {
            case 'photo':
                return <ContentPhoto props={{ ...prop }} callback={closeModal} />;
            case 'video':
                return <ContentVideo props={{ ...prop }} callback={closeModal} />;
            case 'audio':
                return <ContentAudio props={{ ...prop }} callback={closeModal} />;
            default:
                console.error('Invalid type');
                break;
        }
    };

    return (
        <>
            <div className={`flex flex-col pt-9 gap-9 pb-[80px] ${open && 'hidden'}`}>
                <div className='mx-auto'>
                    <img src='../logo-artistall.svg' alt='logo' />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-medium text-dark-grey-placeholder'>Profili</h3>
                        <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                            {[...contents.filter((content) => content.type === 'profile')].map(
                                (content, i) => (
                                    <ProfileCard key={i} props={content} />
                                )
                            )}
                        </div>
                    </div>

                    {/* Foto */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-medium text-dark-grey-placeholder'>Foto</h3>
                        <div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain hide-scrollbar '>
                            {[...contents.filter((content) => content.type === 'photo')].map(
                                (content, i) => (
                                    <PhotoCard key={i} props={content} callback={openModal} />
                                )
                            )}
                        </div>
                    </div>

                    {/* Video */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='font-medium text-dark-grey-placeholder'>Video</h3>
                        <div className='grid gap-4 grid-flow-col auto-cols-[42%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                            {[...contents.filter((content) => content.type === 'video')].map(
                                (content, i) => (
                                    <VideoCard key={i} props={content} callback={openModal} />
                                )
                            )}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 '>
                        <h3 className='font-medium text-dark-grey-placeholder'>Audio</h3>
                        <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                            {[...contents.filter((content) => content.type === 'audio')].map(
                                (content, i) => (
                                    <AudioCard key={i} props={content} callback={openModal} />
                                )
                            )}
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <GenreCard text='Rock' />
                        <GenreCard text='Pop' />
                        <GenreCard text='R&B' />
                        <GenreCard text='Blues' />
                    </div>
                </div>
            </div>
            {open && switchContent(prop?.type)}
        </>
    );
};

export default Home;
