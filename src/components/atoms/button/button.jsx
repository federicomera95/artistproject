import './button.css';
import { SIZE, STYLE } from '../../../constants/button';

export function ButtonComponent({ id, type='button', text, size, style, isDisabled }) {
    return (
        <button id={id} className={`${SIZE[size]} ${STYLE[style]}`} disabled={isDisabled} type={type}>
            {text}
        </button>
    );
}
