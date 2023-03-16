import { Bookmark, Cross } from '../../assets/icons';
import AudioPlayer from '../atoms/audio/AudioPlayer';

const ContentAudio = ({
    props = {
        avatar: '',
        image: '',
        audio: '/media/town-10169.mp3',
        title: 'audio title',
        username: 'artist name',
        description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
        tags: ['rock', 'chitarra', 'basso']
    }
}) => {
    const { avatar, image, audio, title, username, description, tags = [] } = props;

    return (
        <div className='w-full flex flex-col gap-[19px]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[10px] justify-center items-center'>
                    <img
                        className='w-[30px] h-[30px] rounded-[50%] bg-cover bg-center bg-no-repeat'
                        src={avatar ? avatar : '/logo-default.svg'}
                    />
                    <p className='first-letter:capitalize text-[14px] text-dark-grey-base'>
                        {username}
                    </p>
                </div>
                <div onClick={() => console.log('close')}>
                    <Cross dark />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col justify-center items-center pt-4 pb-2 gap-6'>
                    <img
                        className='w-[106px] h-[106px] object-cover rounded-lg'
                        src={image ? image : '/cover-default.png'}
                    />
                    <div className='flex flex-col gap-8 w-[100%] items-center'>
                        <AudioPlayer audio={audio} />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[14px] font-medium text-dark-grey-base first-letter:capitalize'>
                        {title}
                    </p>
                    <Bookmark />
                </div>
                <p className='text-[12px] leading-[14.52px] text-dark-grey-base'>{description}</p>
                <div className='flex flex-wrap gap-1 items-center'>
                    {tags.map((tag, i) => (
                        <p
                            key={`${tag}-${i}`}
                            className='flex gap-1 items-center text-[10px] text-primary-base'
                        >
                            <span className='first-letter:capitalize'>{tag}</span>
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

export default ContentAudio;
