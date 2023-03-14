import { Bookmark } from '../../assets/icons';

const ExtendedPhotoCard = ({ props }) => {
    const { id, avatar, artist, photo, title, description, tags = [] } = props;

    return (
        <div className='flex flex-col w-full shadow-photoCard shadow-[#39537633]/20 rounded-lg'>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='flex gap-2 justify-center items-center'>
                    <img
                        className='w-6 h-6 rounded-[50%] bg-cover bg-center bg-no-repeat'
                        src={avatar ? avatar : '/logo-default.svg'}
                    />
                    <p className='first-letter:capitalize text-[10px] text-dark-grey-base'>
                        {artist}
                    </p>
                </div>
                <Bookmark />
            </div>
            <div className='flex relative h-[250px]'>
                <img className=' w-full h-full' src={photo} />
                <div className='px-4 py-2 bg-gradient-to-t from-dark-grey-base to-dark-grey-base/20  absolute bottom-0 right-0 w-full h-[64px] flex justify-start items-end z-10'>
                    <p className='text-white text-sm font-medium z-20'>{title}</p>
                </div>
            </div>
            <div className='flex flex-col px-4 py-3 gap-2'>
                <p className='text-dark-grey-placeholder text-[12px]'>{description}</p>
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

export default ExtendedPhotoCard;
