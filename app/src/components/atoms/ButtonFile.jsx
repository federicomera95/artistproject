import { useEffect, useState } from 'react';

const ButtonFile = ({ buttonFileProps }) => {
    const { id, val, error = '', change, forwardedRef } = buttonFileProps;

    if (!id) throw new Error('The id is required!');

    const [avatarSrc, setAvatarSrc] = useState();

    useEffect(() => {
        if (!val || error) return setAvatarSrc(undefined);

        const objectUrl = URL.createObjectURL(val);
        setAvatarSrc(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [val, error, setAvatarSrc]);

    return (
        <div className='flex flex-col gap-4'>
            <h3 className='font-medium text-sm text-dark-grey-base'>Foto profilo</h3>
            <div className='flex items-center justify-between'>
                <div
                    className={`w-[90px] h-[90px] rounded-[50%] bg-cover bg-center ${
                        error && 'border-error border-[2px]'
                    }`}
                    style={{
                        backgroundImage: `url(${avatarSrc ? avatarSrc : '/logo-default.svg'})`
                    }}
                ></div>
                <button className='relative px-4 py-1 border-2 rounded-[4px] border-primary-base overflow-hidden'>
                    <p className='text-sm font-medium text-dark-grey-base'>Cambia foto</p>
                    <input
                        id={id}
                        name={id}
                        accept='.jpg,.jpeg,.png'
                        type='file'
                        className='absolute left-0 top-0 scale-[5] opacity-0'
                        ref={forwardedRef}
                        onChange={change}
                    />
                </button>
            </div>
            <p className={`text-sm ${error ? 'text-error' : 'text-dark-grey-placeholder'}`}>
                Massimo 2MB, .jpg, .png
            </p>
        </div>
    );
};

export default ButtonFile;
