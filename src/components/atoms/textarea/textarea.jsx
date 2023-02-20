import { useEffect, useState } from 'react';
import './textarea.css';

const filled = 'border-solid border-2 border-dark-grey-placeholder text-dark-grey-placeholder';

const TextArea = ({ id, label, error, placeholder, type }) => {
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
        <div className='flex flex-col gap-2'>
            <label className='text-sm'>{label}</label>
            <textarea
                onChange={(e) => setValue(e.target.value)}
                id={id}
                placeholder={placeholder}
                value={value}
                type={type}
                className={`${value.length > 0 ? filled : ''}
                p-[10px_16px] border-solid border-2 rounded-lg 
                border-dark-grey-disabled hover:border-primary-hover 
                focus:outline-none focus:border-primary-base 
                focus:shadow-hover focus:shadow-primary-base/30`}
            ></textarea>
            {err && <p className='text-xs text-error'>{error}</p>}
        </div>
    );
};

export default TextArea;
