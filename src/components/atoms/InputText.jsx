import { useEffect, useState } from 'react';
import { Eye, HideEye } from '../../assets/icons';

const INPUT = {
    base: 'w-[100%] text-base p-input ring-inset ring-2 border-none outline-none rounded-lg',
    filled: 'ring-dark-grey-placeholder',
    hover: 'hover:ring-primary-hover',
    focus: 'focus:shadow-primary-base/30 focus:shadow-hover focus:ring-primary-hover',
    disabled: 'disabled:ring-dark-grey-disabled disabled:text-dark-grey-disabled',
    error: 'ring-error hover:ring-error focus:shadow-hover focus:shadow-error/30'
};

const InputText = ({ inputProps }) => {
    const {
        id,
        type = 'text',
        label,
        placeholder,
        error = '',
        val,
        forwardedRef,
        change,
        blur,
        disabled,
        icon,
        iconPos = 'right'
    } = inputProps;

    if (!id) throw new Error('The parameter "id" is required');

    const [passwordType, setPasswordType] = useState('password');
    const handleClick = () => {
        return passwordType === 'password' ? setPasswordType('text') : setPasswordType('password');
    };

    useEffect(() => {}, [val, error, forwardedRef]);

    return (
        <div className='flex flex-col justify-start text-dark-grey-base gap-2 w-[100%]'>
            <label
                htmlFor={id}
                className='text-sm font-medium capitalize pointer-events-none disabled:text-dark-grey-disabled'
                disabled={disabled}
            >
                {label}
            </label>
            <div className='flex relative'>
                {!!icon && iconPos === 'left' && (
                    <div
                        className='left-[1em] object-cover w-[100%] h-[100%] [&+input]:pl-[3em]
                        absolute max-w-[24px] max-h-[24px] top-[50%] translate-y-[-50%]'
                    >
                        {icon}
                    </div>
                )}
                <input
                    title={placeholder}
                    className={`${INPUT.base} ${!error && INPUT.focus} ${!error && INPUT.hover} ${
                        INPUT.disabled
                    } ${error ? INPUT.error : 'ring-dark-grey-disabled'} ${
                        !!val && !error && INPUT.filled
                    }
                    `}
                    type={type === 'password' ? passwordType : type}
                    id={id}
                    name={id}
                    value={val}
                    ref={forwardedRef}
                    disabled={disabled}
                    onBlur={blur}
                    onChange={change}
                />
                {!!icon && iconPos === 'right' && (
                    <div className='right-[1em] absolute max-w-[24px] max-h-[24px] top-[50%] translate-y-[-50%]'>
                        {icon}
                    </div>
                )}
                {id === 'password' &&
                    (passwordType === 'password' ? (
                        <span
                            className='right-[1em] absolute max-w-[24px] max-h-[24px] top-[50%] translate-y-[-50%]'
                            onClick={handleClick}
                        >
                            <Eye />
                        </span>
                    ) : (
                        <span
                            className='right-[1em] absolute max-w-[24px] max-h-[24px] top-[50%] translate-y-[-50%]'
                            onClick={handleClick}
                        >
                            <HideEye />
                        </span>
                    ))}
                <label
                    className={`${val ? 'hidden transition-all duration-[200ms]' : ''} ${
                        iconPos === 'left' ? 'pl-[3em]' : ''
                    } absolute top-[50%] translate-y-[-50%] p-input w-[calc(100%-40px)] pointer-events-none text-dark-grey-placeholder text-base whitespace-nowrap 
                    overflow-hidden text-ellipsis [&first-letter]:uppercase disabled:text-dark-grey-disabled`}
                    disabled={disabled}
                >
                    {placeholder}
                </label>
            </div>
            {!!error && !val && <p className='text-error text-xs font-normal'>{error}</p>}
        </div>
    );
};

export default InputText;
