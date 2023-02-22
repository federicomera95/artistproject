const VideoCard = ({artName, videoTitle, profileImg, video}) => {
    return(
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                    <img className='w-[20px] h-[20px] rounded-[50%]' src={profileImg} />
                    <p className='text-[10px]'>{artName}</p>
                </div>
                <div className='flex gap-4'>
                    <img className='w-[150px] h-[84px] rounded-lg' src={video} />
                </div>
                <p className='text-[12px] mt-[4px]'>{videoTitle}</p>
            </div>
    );
};

export default VideoCard;/* Frame 65 */

