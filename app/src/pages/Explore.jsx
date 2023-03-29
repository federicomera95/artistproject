import ExtendedPhotoCard from '../components/molecules/ExtendedPhotoCard';
import ExtendedAudioCard from '../components/molecules/ExtendedAudioCard';
import ExtendedVideoCard from '../components/molecules/ExtendedVideoCard';

const Explore = () => {
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

    return (
        <>
            <div className='flex flex-col items-center gap-y-10 pb-20'>
                {[...contents].map((content, i) => {
                    switch (content.type) {
                        case 'photo':
                            return (
                                <ExtendedPhotoCard
                                    key={`${content.title}-${i}`}
                                    avatar={content.avatar}
                                    image={content.image}
                                    title={content.title}
                                    username={content.username}
                                    description={content.description}
                                    tags={content.tags}
                                />
                            );
                        case 'audio':
                            return (
                                <ExtendedAudioCard
                                    key={`${content.title}-${i}`}
                                    username={content.username}
                                    title={content.title}
                                    thumbnail={content.thumbnail}
                                    description={content.description}
                                    audio={content.audio}
                                    tags={content.tags}
                                    avatar={content.avatar}
                                />
                            );
                        case 'video':
                            return (
                                <ExtendedVideoCard
                                    key={`${content.title}-${i}`}
                                    username={content.username}
                                    thumbnail={content.thumbnail}
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
        </>
    );
};

export default Explore;
