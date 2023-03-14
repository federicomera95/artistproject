const Radio = ({ id, text, checked, disabled }) => {
    if (!id) throw new Error('The parameter "id" is required');

    return (
        <div className='radio-container flex items-center gap-[0.5em]'>
            <input
                type='radio'
                id={id}
                defaultChecked={checked}
                disabled={disabled}
                className={`peer absolute appearance-none flex justify-center items-center focus:outline-none
                checked:before:content-[''] checked:before:inline-block checked:before:bg-white
                checked:before:w-[0.5em] checked:before:h-[0.5em] checked:before:rounded-full checked:before:relative checked:before:left-[0.25em]`}
            />
            <label
                htmlFor={id}
                className={`flex items-center gap-[0.5em]
                before:content-[''] before:w-[1em] before:h-[1em] before:border-[0.1em] before:rounded-[50%] before:border-dark-grey-disabled
                peer-checked:before:bg-primary-base peer-checked:before:border-none
                peer-hover:before:border-primary-hover peer-focus:before:shadow-focus peer-focus:before:shadow-primary-disabled peer-focus:before:border-primary-hover
                peer-disabled:text-dark-grey-disabled peer-checked:peer-disabled:before:bg-primary-disabled
                peer-hover:peer-disabled:before:border-dark-grey-disabled`}
            >
                {text}
            </label>
        </div>
    );
};

export default Radio;
