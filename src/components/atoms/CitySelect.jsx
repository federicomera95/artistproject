const options = ['Seleziona dalla lista', 'Torino', 'Milano', 'Roma', 'Napoli', 'Palermo'];

const selectId = 'city-select';

const CitySelect = () => {
    return (
        <div className='flex flex-col gap-2'>
            <label htmlFor={selectId} className='text-dark-grey-base text-sm font-medium'>
                Città
            </label>
            <div className='flex relative items-center'>
                <select
                    id={selectId}
                    className='w-full py-[10px] pl-4 pr-3 z-10 border-2 rounded-lg text-dark-grey-placeholder
                  border-dark-grey-disabled bg-transparent appearance-none outline-none'
                >
                    {options.map((opt) => (
                        <option key={options.indexOf(opt)}>{opt}</option>
                    ))}
                </select>
                <img className='absolute right-[10px]' src='/icons/arrow-down.svg' />
            </div>
        </div>
    );
};

export default CitySelect;
