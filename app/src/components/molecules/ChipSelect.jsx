import Chip from '../atoms/Chip';

const ChipSelect = ({ chips, type, callback }) => {
    if (!type) throw new Error(`Prop 'type' is required`);

    return (
        <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium text-dark-grey-base'>{type}</label>
            {type === 'Genere' && (
                <div className='flex gap-2 flex-wrap'>
                    {chips.map(({ name, active }, i) => (
                        <Chip key={i} text={name} active={active} callback={(e) => callback(i)} />
                    ))}
                </div>
            )}
            {type === 'Strumenti' && (
                <div className='flex gap-2 flex-wrap'>
                    {chips.map(({ name, active }, i) => (
                        <Chip key={i} text={name} active={active} callback={(e) => callback(i)} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChipSelect;
