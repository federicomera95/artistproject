import { createSearchParams, useNavigate } from 'react-router-dom';
import { ToggleVideo } from '../../assets/icons';
import STATIC_FILES from '../../utility/constants';

const VideoCard = ({ props, callback }) => {
    const { avatar, username, title, thumbnail } = props;

    const navigate = useNavigate();

    return (
        <div className='flex flex-col gap-2' onClick={() => callback(props)}>
            <div className='flex flex-col gap-1'>
                <div
                    className='flex items-center gap-1'
                    onClick={() =>
                        navigate({
                            pathname: '/profile',
                            search: `?${createSearchParams({
                                user: username
                            })}`
                        })
                    }
                >
                    <img
                        className='w-5 h-5'
                        src={avatar ? `${STATIC_FILES}/${avatar}` : '/logo-default.svg'}
                    />
                    <p className='text-[10px] font-normal text-dark-grey-base'>{username}</p>
                </div>
                <div
                    className={`relative w-[150px] h-[84px] rounded-lg border-[1px] border-primary-background object-cover bg-cover bg-center bg-no-repeat`}
                    style={{
                        backgroundImage: thumbnail
                            ? `url(${thumbnail})`
                            : `url('/photo-default.svg')`
                    }}
                >
                    <div className='flex absolute top-0 bottom-0 left-0 right-0 justify-center items-center'>
                        <div
                            className='h-6 w-6 shadow-play-pause rounded-[50%] bg-white flex items-center justify-center cursor-pointer'
                            style={{ opacity: '1' }}
                        >
                            <div className='h-3 w-3'>
                                <ToggleVideo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-xs font-normal text-dark-grey-base'>{title}</p>
        </div>
    );
};

export default VideoCard;
