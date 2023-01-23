import './button.css';
import { SIZE, STYLE } from '../../../constants/button';

export function ButtonComponent({ text, size, style, disabled }) {
    return (
        <button className={`${SIZE[size]} ${STYLE[style]}`} disabled={disabled} type='button'>
            {text}
        </button>
    );
}
