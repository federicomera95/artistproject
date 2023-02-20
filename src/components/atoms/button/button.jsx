import './button.css';

export const SIZE = {
    small: 'btn-sm',
    medium: 'btn-md',
    large: 'btn-lg'
};

export const STYLE = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary: 'btn-tertiary'
};

const Button = ({ id, type = 'button', text, size, style, disabled }) => {
    return (
        <button id={id} className={`${SIZE[size]} ${STYLE[style]}`} disabled={disabled} type={type}>
            {text}
        </button>
    );
};

export default Button;
