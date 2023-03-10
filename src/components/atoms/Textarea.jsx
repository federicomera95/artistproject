import { useEffect } from 'react';

const Textarea = ({ textareaProps }) => {
    const { id, label, val, error, placeholder, change, forwardedRef, blur, disabled } =
        textareaProps;

    if (!id) throw new Error(`Prop 'id' is required`);

    useEffect(() => {}, [val, forwardedRef, error]);

    return (
        <div className='flex flex-col-reverse gap-2 text-[16px] leading-[19px]'>
            <div className='flex flex-col gap-2'>
                <textarea
                    id={id}
                    name={id}
                    onChange={change}
                    onBlur={blur}
                    ref={forwardedRef}
                    placeholder={placeholder}
                    value={val}
                    rows={30}
                    cols={30}
                    disabled={disabled}
                    className={`peer ${val.length > 0 ? 'border-dark-grey-placeholder' : ''} ${
                        error && !disabled ? 'border-error' : 'border-dark-grey-disabled'
                    } py-[10px] px-4 border-2 rounded-lg max-h-[135px]
                    placeholder:text-dark-grey-placeholder
                    hover:border-primary-hover focus:outline-none
                    focus:border-primary-base focus:shadow-hover focus:shadow-primary-base/30
                    disabled:border-dark-grey-disabled disabled:text-dark-grey-disabled`}
                ></textarea>
                {error && !disabled && <p className='text-xs text-error'>{error}</p>}
            </div>
            <label
                htmlFor={id}
                className='text-sm font-medium peer-disabled:text-dark-grey-disabled pointer-events-none capitalize'
            >
                {label}
            </label>
        </div>
    );
};

export default Textarea;
