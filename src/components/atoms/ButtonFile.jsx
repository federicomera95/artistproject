import { useEffect, useState } from 'react';

const ButtonFile = () => {
    const [fileValue, setFileValue] = useState();
    const [avatarSrc, setAvatarSrc] = useState();

    useEffect(() => {
        if (!fileValue) return setAvatarSrc(undefined);

        const objectUrl = URL.createObjectURL(fileValue);
        setAvatarSrc(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [fileValue]);

    const handleFileChange = ({ target }) => setFileValue(target.files[0]);

    return (
        <div className='flex flex-col gap-4'>
            <h3 className='font-medium text-sm text-dark-grey-base'>Foto profilo</h3>
            <div className='flex items-center justify-between'>
                <div
                    className='w-[90px] h-[90px] rounded-[50%] bg-no-repeat bg-center'
                    style={{
                        backgroundImage: `url(${avatarSrc ? avatarSrc : '/logo-default.svg'})`
                    }}
                ></div>
                <button className='relative px-4 py-1 border-2 rounded-[4px] border-primary-base overflow-hidden'>
                    <p className='text-sm font-medium text-dark-grey-base'>Cambia foto</p>
                    <input
                        type='file'
                        className='absolute left-0 top-0 scale-[5] opacity-0'
                        onChange={handleFileChange}
                    />
                </button>
            </div>
            <p className='text-sm text-dark-grey-placeholder'>Massimo 2MB, .jpg, .png</p>
        </div>
    );
};

export default ButtonFile;
