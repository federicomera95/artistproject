import Chip from '../atoms/Chip';

const ChipSelect = ({ type }) => {
    if (!type) throw new Error(`Prop 'type' is required`);

    return (
        <div className='flex flex-col gap-2'>
            <label className='text-sm font-medium text-dark-grey-base'>{type}</label>
            {type === 'Genere' && (
                <div className='flex gap-2 flex-wrap'>
                    <Chip text='Pop' />
                    <Chip text='Hip Pop' />
                    <Chip text='Rap' />
                    <Chip text='Rock' />
                    <Chip text='Classico' />
                    <Chip text='Instrumental' />
                    <Chip text='Chill' />
                    <Chip text='Jazz' />
                    <Chip text='Tecno' />
                </div>
            )}
            {type === 'Strumenti' && (
                <div className='flex gap-2 flex-wrap'>
                    <Chip text='Chitarra elettrica' />
                    <Chip text='Tastiera' />
                    <Chip text='Chitarra classica' />
                    <Chip text='Batteria' />
                    <Chip text='Sassofono' />
                    <Chip text='Violino' />
                </div>
            )}
        </div>
    );
};

export default ChipSelect;
