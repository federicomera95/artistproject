import PhotoCard from '../components/molecules/PhotoCard';
import AudioCard from '../components/molecules/AudioCard';
import VideoCard from '../components/molecules/VideoCard';

const Explore = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-10 pb-20'>
                <PhotoCard title='placeholder 1' username='User 1' />
                <PhotoCard title='placeholder 2' username='User 2' />
                <PhotoCard title='placeholder 3' username='User 3' />
                <AudioCard title='placeholder 4' username='user 4' />
                <AudioCard title='placeholder 5' username='user 5' />
                <AudioCard title='placeholder 6' username='user 6' />
                <VideoCard title='placeholder 7' name='user 7' />
                <VideoCard title='placeholder 8' name='user 8' />
                <VideoCard title='placeholder 9' name='user 9' />
                <VideoCard title='placeholder 10' name='user 10' />
            </div>
        </>
    );
};

export default Explore;
