import { useEffect, useState } from 'react';
import { Upload } from '../../assets/icons';

const InputFile = ({ inputFileProps }) => {
    const { id, label, val, acceptRules, error = '', change, forwardedRef, text } = inputFileProps;

    if (!id) throw new Error('The id is required!');

    const [preview, setPreview] = useState();
    const [fileName, setName] = useState();

    useEffect(() => {
        if (!val || error) {
            setPreview(undefined);
            setName('');
            return;
        }
        if (id === 'audio' || id === 'video') return setName(val?.name);
        const objectUrl = URL.createObjectURL(val);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [val, error, id]);

    return (
        <div className='w-[100%] flex flex-col gap-[8px] text-[14px]'>
            <label
                className='relative first-letter:uppercase text-dark-grey-base font-medium pointer-events-none'
                htmlFor={id}
            >
                {label}
            </label>
            <div
                className={`flex items-center justify-center border-[2px] border-dashed border-dark-grey-disabled bg-no-repeat bg-center ${
                    error && 'border-error'
                }`}
                style={{
                    backgroundImage: `url(${preview ? preview : '/assets/cover-default.svg'})`
                }}
            >
                <input
                    className='pointer-events h-[139px] opacity-0 z-[1]'
                    id={id}
                    name={id}
                    accept={acceptRules}
                    type='file'
                    onChange={change}
                    ref={forwardedRef}
                />
                {!preview && (
                    <div className='absolute flex flex-col justify-center items-center'>
                        <Upload />
                        {fileName}
                    </div>
                )}
            </div>
            <p className={`${error ? 'text-error' : 'text-dark-grey-placeholder'}`}>{text}</p>
        </div>
    );
};

export default InputFile;
