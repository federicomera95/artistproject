import ProfileCard from '../components/atoms/ProfileCard';
import PhotoCard from '../components/molecules/PhotoCard';
import VideoCard from '../components/molecules/VideoCard';
import AudioCard from '../components/molecules/AudioCard';
import '../styles/hide-scrollbar.css';
import GenreCard from '../components/molecules/GenreCard';

const Home = () => {
    return (
        <div className='flex flex-col pt-9 gap-9 pb-[80px]'>
            <h1 className='mx-auto font-bold text-4xl text-dark-grey-base'>
                Artist<span className='text-primary-base'>All</span>
            </h1>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Profili</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                        <ProfileCard username="Nome d'arte" />
                    </div>
                </div>

                {/* Foto */}
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Foto</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[40%] overflow-x-auto overscroll-x-contain hide-scrollbar '>
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                        <PhotoCard title='placeholder 2' username='User 2' />
                    </div>
                </div>

                {/* Video */}
                <div className='flex flex-col gap-4'>
                    <h3 className='font-medium text-dark-grey-placeholder'>Video</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[42%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        <VideoCard name='User-1' title='User' />
                        <VideoCard name='User-1' title='User' />
                        <VideoCard name='User-1' title='User' />
                        <VideoCard name='User-1' title='User' />
                        <VideoCard name='User-1' title='User' />
                        <VideoCard name='User-1' title='User' />
                        <VideoCard name='User-1' title='User' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 '>
                    <h3 className='font-medium text-dark-grey-placeholder'>Audio</h3>
                    <div className='grid gap-4 grid-flow-col auto-cols-[25%] overflow-x-auto overscroll-x-contain hide-scrollbar'>
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
                        <AudioCard title='Title' username='User' thumbnail='/photo-default.svg' />
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
