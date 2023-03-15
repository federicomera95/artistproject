import ExtendedPhotoCard from '../components/molecules/ExtendedPhotoCard';
import ExtendedAudioCard from '../components/molecules/ExtendedAudioCard';
import ExtendedVideoCard from '../components/molecules/ExtendedVideoCard';

const Explore = () => {
    return (
        <>
            <div className='flex flex-col items-center gap-y-10 pb-20'>
                <ExtendedPhotoCard title='placeholder 1' username='User 1' />
                <ExtendedPhotoCard title='placeholder 2' username='User 2' />
                <ExtendedPhotoCard title='placeholder 3' username='User 3' />
                <ExtendedAudioCard title='placeholder 4' username='user 4' />
                <ExtendedAudioCard title='placeholder 5' username='user 5' />
                <ExtendedAudioCard title='placeholder 6' username='user 6' />
                <ExtendedVideoCard title='placeholder 7' name='user 7' />
                <ExtendedVideoCard title='placeholder 8' name='user 8' />
                <ExtendedVideoCard title='placeholder 9' name='user 9' />
                <ExtendedVideoCard title='placeholder 10' name='user 10' />
            </div>
        </>
    );
};

export default Explore;
