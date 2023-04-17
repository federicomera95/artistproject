import { Bookmark, Cross } from '../../assets/icons';
import STATIC_FILES from '../../utility/constants';
import AudioPlayer from '../atoms/audio/AudioPlayer';

const ContentAudio = ({ props, callback }) => {
    const { avatar, thumbnail, file, title, username, description, tags = [] } = props;

    return (
        <div className='w-full h-[100%] fixed p-5 flex flex-col gap-[19px] bg-white z-[9999] inset-0'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[10px] justify-center items-center'>
                    <img
                        crossOrigin='anonymous'
                        className='w-[30px] h-[30px] rounded-[50%] object-cover bg-cover bg-center bg-no-repeat'
                        src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
                    />
                    <p className='first-letter:capitalize text-[14px] text-dark-grey-base'>
                        {username}
                    </p>
                </div>
                <div onClick={callback}>
                    <Cross dark />
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col justify-center items-center pt-4 pb-2 gap-6'>
                    <img
                        crossOrigin='anonymous'
                        className='w-[106px] h-[106px] object-cover rounded-lg'
                        src={thumbnail ? `${STATIC_FILES}/${thumbnail}` : '/cover-default.png'}
                    />
                    <div className='flex flex-col gap-8 w-[100%] items-center'>
                        <AudioPlayer audio={file} />
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
