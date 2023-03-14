const TripleSelect = ({ tripleSelectProps }) => {
    const {
        id,
        label,
        val,
        choices = ['Choice 1', 'Choice 2', 'Choice 3'],
        callback
    } = tripleSelectProps;

    return (
        <div className='flex flex-col gap-4'>
            <label className='text-sm font-medium text-dark-grey-base'>{label}</label>
            <div className='flex justify-between gap-2 font-medium text-sm'>
                {choices.map((choice, i) => (
                    <button
                        key={i}
                        id={i}
                        name={id}
                        className={`${
                            val[i]
                                ? 'bg-primary-base text-white'
                                : 'bg-primary-background text-primary-base'
                        } py-4 w-full rounded-lg`}
                        onClick={callback}
                    >
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TripleSelect;
