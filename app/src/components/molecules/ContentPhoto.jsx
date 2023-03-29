import { Bookmark, Cross } from '../../assets/icons';

const ContentPhoto = ({ props, callback }) => {
    const { avatar, thumbnail, title, username, description, tags = [] } = props;

    return (
        <div className='w-full flex flex-col gap-[19px]'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-[10px] justify-center items-center'>
                    <img
                        className='w-[30px] h-[30px] rounded-[50%] object-cover bg-cover bg-center bg-no-repeat'
                        src={avatar ? avatar : '/logo-default.svg'}
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
                <div className='w-screen relative right-5'>
                    <img
                        className='w-full h-[250px]'
                        src={thumbnail ? thumbnail : '/cover-default.png'}
                    />
                </div>
                <div className='flex justify-between items-center'>
                    <p className='text-[14px] font-medium text-dark-grey-base'>{title}</p>
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

export default ContentPhoto;
