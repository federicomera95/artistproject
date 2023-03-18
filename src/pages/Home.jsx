import '../styles/hide-scrollbar.css';

import ProfileCard from '../components/atoms/ProfileCard';
import PhotoCard from '../components/molecules/PhotoCard';
import VideoCard from '../components/molecules/VideoCard';
import AudioCard from '../components/molecules/AudioCard';
import GenreCard from '../components/molecules/GenreCard';

const Home = () => {
    return (
        <div className='flex flex-col pt-9 gap-9 pb-[80px]'>
            <div className='ml-[25%]'>
                <img src='../logo-artistall.svg' alt='logo' />
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Profili</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        {new Array(10).fill(0).map((_, i) => (
                            <ProfileCard key={i} username='Users' />
                        ))}
                    </div>
                </div>

                {/* Foto */}
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Foto</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain hide-scrollbar '>
                        {new Array(10).fill(0).map((_, i) => (
                            <PhotoCard key={i} username='Users' title='Username' />
                        ))}
                    </div>
                </div>

                {/* Video */}
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Video</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[42%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        {new Array(10).fill(0).map((_, i) => (
                            <VideoCard key={i} name='Users' title='Username' />
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <h3 className='font-medium text-dark-grey-placeholder'>Audio</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        {new Array(10).fill(0).map((_, i) => (
                            <AudioCard
                                key={i}
                                username='Users'
                                title='Username'
                                thumbnail='/photo-default.svg'
                            />
                        ))}
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
    );
};

export default Home;
