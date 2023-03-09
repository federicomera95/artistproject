import { useEffect, useState } from 'react';
import { Upload } from '../../assets/icons';

const InputFile = ({ id, label, error = '', required, text }) => {
    if (!id) throw new Error('The id is required!');

    const [fileValue, setFileValue] = useState();
    const [preview, setPreview] = useState();

    useEffect(() => {
        if (!fileValue) return setPreview(undefined);

        const objectUrl = URL.createObjectURL(fileValue);
        setPreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [fileValue]);

    const handleChange = ({ files }) => setFileValue(files[0]);

    return (
        <div className='w-[100%] flex flex-col gap-[8px] text-[14px]'>
            <label
                className='relative first-letter:uppercase text-dark-grey-base font-medium pointer-events-none'
                htmlFor={id}
            >
                {label}
            </label>
            <div
                className='flex items-center justify-center border-[2px] border-dashed border-dark-grey-disabled bg-no-repeat bg-center'
                style={{
                    backgroundImage: `url(${preview ? preview : '/assets/cover-default.svg'})`
                }}
            >
                <input
                    className='pointer-events h-[139px] opacity-0 z-[1]'
                    id={id}
                    type='file'
                    onChange={({ target }) => handleChange(target)}
                    required={required}
                />
                {!preview && (
                    <div className='absolute'>
                        <Upload />
                    </div>
                )}
            </div>
            <p className='text-dark-grey-placeholder'>{text}</p>
        </div>
    );
};

export default InputFile;
