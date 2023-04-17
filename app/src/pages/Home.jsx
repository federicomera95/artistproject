import '../styles/hide-scrollbar.css';

import ProfileCard from '../components/atoms/ProfileCard';
import PhotoCard from '../components/molecules/PhotoCard';
import VideoCard from '../components/molecules/VideoCard';
import AudioCard from '../components/molecules/AudioCard';
import { useCallback, useEffect, useState } from 'react';
import ContentAudio from '../components/molecules/ContentAudio';
import ContentVideo from '../components/molecules/ContentVideo';
import ContentPhoto from '../components/molecules/ContentPhoto';
import useFetch from '../hooks/useFetch';
import { find } from '../utility/storage';
import Loading from './Loading';

const Home = () => {
    // eslint-disable-next-line no-unused-vars
    const [data, load, err, reFetch] = useFetch('/contents/home', {
        headers: {
            Authorization: `Bearer ${find('token').token}`
        }
    });

    useEffect(() => {
        if (data) console.log(data.data[0]);
    }, [data]);

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
                {load && <Loading />}
                {data && !load && !err && (
                    <>
                        <div className='mx-auto'>
                            <img src='../logo-artistall.svg' alt='logo' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex flex-col gap-4'>
                                <h3 className='font-medium text-dark-grey-placeholder'>Profili</h3>
                                <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                                    {data.data[0].map((content, i) => (
                                        <ProfileCard key={i} props={content} />
                                    ))}
                                </div>
                            </div>

                            {/* Foto */}
                            <div className='flex flex-col gap-4'>
                                <h3 className='font-medium text-dark-grey-placeholder'>Foto</h3>
                                <div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain hide-scrollbar '>
                                    {data.data[1]
                                        .filter((content) => content.type === 'photo')
                                        .map((content, i) => (
                                            <PhotoCard
                                                key={i}
                                                props={content}
                                                callback={openModal}
                                            />
                                        ))}
                                </div>
                            </div>

                            {/* Video */}
                            <div className='flex flex-col gap-4'>
                                <h3 className='font-medium text-dark-grey-placeholder'>Video</h3>
                                <div className='grid gap-4 grid-flow-col auto-cols-[42%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                                    {data.data[1]
                                        .filter((content) => content.type === 'video')
                                        .map((content, i) => (
                                            <VideoCard
                                                key={i}
                                                props={content}
                                                callback={openModal}
                                            />
                                        ))}
                                </div>
                            </div>

                            {/* Audio */}
                            <div className='flex flex-col gap-4 '>
                                <h3 className='font-medium text-dark-grey-placeholder'>Audio</h3>
                                <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                                    {data.data[1]
                                        .filter((content) => content.type === 'audio')
                                        .map((content, i) => (
                                            <AudioCard
                                                key={i}
                                                props={content}
                                                callback={openModal}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {open && switchContent(prop?.type)}
        </>
    );
};

export default Home;
