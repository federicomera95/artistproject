export const PhotoCard = ({artName, photoTitle, profileImg, image}) => {
    return (
            <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                    <img className='w-[20px] h-[20px] rounded-[50%] bg-slate-400' src={profileImg} />
                    <p className='text-[10px]'>{artName}</p>
                </div>
                <div className='flex gap-4'>
                    <img className='w-[150px] h-[150px] rounded-lg' src={image}/>
                </div>
                <p className='text-[12px] mt-[4px]'>{photoTitle}</p>
            </div>
    );
};

