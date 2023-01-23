import './button.css';
import { SIZE, STYLE } from '../../../constants/button';

export function ButtonComponent({ text, size, style, isDisabled }) {
    return (
        <button className={`${SIZE[size]} ${STYLE[style]}`} disabled={isDisabled} type='button'>
            {text}
        </button>
    );
}
