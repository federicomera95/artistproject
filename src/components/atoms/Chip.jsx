import { useState } from 'react';

const Chip = ({ text, defaultActive }) => {
    const [active, setActive] = useState(defaultActive);

    return (
        <div className='inline-flex justify-center'>
            <span
                onClick={() => setActive((a) => !a)}
                className={`
                px-2 py-1 rounded-full font-medium text-[12px]
                flex align-center w-max cursor-pointer 
                active:bg-gray-300 transition duration-300 ease
                ${
                    active
                        ? 'text-white bg-primary-base'
                        : 'text-primary-base bg-primary-background'
                }`}
            >
                {text}
            </span>
        </div>
    );
};

export default Chip;
