import { useState } from 'react';
import { Eye, Search } from '../../assets/icons';

const InputText = ({ objInputText, disabled, required, eye, search, iconPos = 'right' }) => {
    const { id, type = 'text', label, placeholder, msgError = '', val } = objInputText;
    const [value, setValue] = useState(val);

    const handleChange = (e) => setValue(e.target.value);

    if (!id) throw new Error('The parameter "id" is required');

    return (
        <div className='input-field-group flex flex-col justify-start text-dark-grey-base gap-2 w-[100%]'>
            <label
                htmlFor={id}
                className='text-sm font-medium capitalize pointer-events-none disabled:text-dark-grey-disabled'
                disabled={disabled}
            >
                {label}
            </label>
            <div className='input-text-group flex relative'>
                {!!eye && iconPos === 'left' && (
                    <div
                        className='left-[1em] object-cover w-[100%] h-[100%] [&+input]:pl-[3em]
                        absolute max-w-[24px] max-h-[24px] top-[50%] translate-y-[-50%]'
                    >
                        <Eye />
                    </div>
                )}
                <input
                    title={placeholder}
                    className={`${
                        msgError && !value
                            ? 'ring-error enabled:hover:ring-error focus:ring-error focus:shadow-error/30'
                            : ''
                    } ${
                        value && 'filled'
                    } [&.filled]:ring-dark-grey-placeholder w-[100%] text-base p-input ring-inset ring-2 ring-dark-grey-disabled border-none rounded-lg
                    enabled:hover:ring-primary-hover enabled:hover:outline-none focus:shadow-hover focus:shadow-primary-base/30 focus:ring-primary-hover focus:outline-none
                    disabled:ring-dark-grey-disabled disabled:text-dark-grey-disabled`}
                    type={type}
                    id={id}
                    defaultValue={value}
                    disabled={disabled}
                    required={required}
                    onChange={handleChange}
                />
                {(!!eye || !!search) && iconPos === 'right' && (
                    <div className='right-[1em] absolute max-w-[24px] max-h-[24px] top-[50%] translate-y-[-50%]'>
                        {(!!eye && !search && <Eye />) || (!eye && !!search && <Search dark />)}
                    </div>
                )}
                <label
                    className={`${value ? 'hidden transition-all duration-[200ms]' : ''} ${
                        iconPos === 'left' ? 'pl-[3em]' : ''
                    } absolute top-[50%] translate-y-[-50%] p-input w-[calc(100%-40px)] pointer-events-none text-dark-grey-placeholder text-base whitespace-nowrap 
                    overflow-hidden text-ellipsis [&first-letter]:uppercase disabled:text-dark-grey-disabled`}
                    disabled={disabled}
                >
                    {placeholder}
                </label>
            </div>
            {!!msgError && !value && <p className='text-error text-xs font-normal'>{msgError}</p>}
        </div>
    );
};

export default InputText;
