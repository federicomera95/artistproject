const VideoCard = ({artName, videoTitle}) => {
    return(
        <div className='flex gap-4 overflow-x-scroll'>
            <div className='flex - flex-col gap-1'>
                <div className='flex flex-row items-center gap-1'>
                    <div className='w-[20px] h-[20px] rounded-[50%] bg-slate-400'></div>
                    <p className='text-[10px]'>{artName}</p>
                </div>
                <div className='flex gap-4'>
                    <div className='w-[150px] shrink-0 h-[84px] bg-slate-400 gap-1 rounded-lg '></div>
                </div>
                <p className='text-[12px] mt-[4px]'>{videoTitle}</p>
            </div>
        </div>
    );
};

export default VideoCard;/* Frame 65 */

