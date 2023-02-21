import { useEffect, useState } from 'react';

const Textarea = ({ id, label, error, placeholder, disabled, type }) => {
    const [err, setError] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value.length < 5) {
            setError(true);
        } else {
            setError(false);
        }
    }, [value]);

    return (
        <div className='flex flex-col-reverse gap-2'>
            <div className='flex flex-col gap-2'>
                <textarea
                    onChange={(e) => setValue(e.target.value)}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    disabled={disabled}
                    className={`peer ${value.length > 0 ? 'border-dark-grey-placeholder' : ''} ${
                        err && !disabled ? 'border-error' : 'border-dark-grey-disabled'
                    } py-[10px] px-4 border-2 rounded-lg 
                    placeholder:text-dark-grey-placeholder
                    hover:border-primary-hover focus:outline-none
                    focus:border-primary-base focus:shadow-hover focus:shadow-primary-base/30
                    disabled:border-dark-grey-disabled disabled:text-dark-grey-disabled`}
                ></textarea>
                {err && !disabled && <p className='text-xs text-error'>{error}</p>}
            </div>
            <label className='text-sm font-medium peer-disabled:text-dark-grey-disabled'>
                {label}
            </label>
        </div>
    );
};

export default Textarea;
