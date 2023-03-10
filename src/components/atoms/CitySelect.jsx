import { useEffect } from 'react';
import { ArrowDown } from '../../assets/icons';

const options = ['Seleziona dalla lista', 'Torino', 'Milano', 'Roma', 'Napoli', 'Palermo'];

const CitySelect = ({ selectProps }) => {
    const { id = 'city-select', val, error = '', change } = selectProps;

    useEffect(() => {}, [val, error]);

    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={id} className='text-dark-grey-base text-sm font-medium'>
                Città
            </label>
            <div className='flex relative items-center'>
                <select
                    id={id}
                    name={id}
                    onChange={change}
                    value={val}
                    className='w-full py-[10px] pl-4 pr-3 z-10 border-2 rounded-lg text-dark-grey-placeholder
                  border-dark-grey-disabled bg-transparent appearance-none outline-none'
                >
                    {options.map((opt) => (
                        <option key={options.indexOf(opt)} value={opt}>
                            {opt}
                        </option>
                    ))}
                </select>
                <div className='absolute right-[10px]'>
                    <ArrowDown />
                </div>
            </div>
        </div>
    );
};

export default CitySelect;
