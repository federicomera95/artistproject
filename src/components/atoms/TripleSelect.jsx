import { useState } from 'react';

const TripleSelect = ({ label, choices = ['Choice 1', 'Choice 2', 'Choice 3'] }) => {
    const [clicked, setClicked] = useState([true, false, false]);

    const handleClick = ({ target }) => {
        const cache = [...clicked];

        cache[target.id] = !cache[target.id];

        setClicked(cache);
    };

    return (
        <div className='flex flex-col gap-4'>
            <label className='text-sm font-medium text-dark-grey-base'>{label}</label>
            <div className='flex justify-between gap-2 font-medium text-sm'>
                {choices.map((choice) => (
                    <button
                        key={choices.indexOf(choice)}
                        id={choices.indexOf(choice)}
                        className={`${
                            clicked[choices.indexOf(choice)]
                                ? 'bg-primary-base text-white'
                                : 'bg-primary-background text-primary-base'
                        } py-4 w-full rounded-lg`}
                        onClick={handleClick}
                    >
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TripleSelect;
