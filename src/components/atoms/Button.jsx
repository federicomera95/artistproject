import './button.css';

export const SIZE = {
    small: 'border-none font-medium p-ms rounded w-[100%] text-sm',
    medium: 'border-none font-medium text-base p-ms rounded-lg w-[100%]',
    large: 'border-none font-medium text-lg p-lg rounded-lg w-[100%]'
};

export const STYLE = {
    primary: `bg-primary-base text-[white] enabled:hover:bg-primary-hover enabled:hover:shadow-hover enabled:hover:shadow-primary-base 
    focus:shadow-focus focus:shadow-primary-base/30 disabled:bg-primary-disabled transition-all`,
    secondary: `bg-[white] text-dark-grey-base ring-inset ring-2 ring-primary-base enabled:hover:bg-primary-background enabled:hover:shadow-hover enabled:hover:shadow-primary-base/30 
    focus:shadow-focus focus:shadow-primary-base/30 disabled:bg-white disabled:shadow-none disabled:ring-primary-disabled disabled:text-dark-grey-disabled transition-all`,
    tertiary: `bg-[white] text-primary-base enabled:hover:bg-primary-background focus:shadow-focus focus:shadow-primary-base/30 disabled:text-primary-disabled`
};

const Button = ({ id, type = 'button', text, size, style, disabled }) => {
    return (
        <button id={id} className={`${SIZE[size]} ${STYLE[style]}`} disabled={disabled} type={type}>
            {text}
        </button>
    );
};

export default Button;
