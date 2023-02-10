import './button.css';
import { SIZE, STYLE } from '../../../constants/button';

export default function ButtonComponent({ id, type='button', text, size, style, disabled }) {
    return (
        <button id={id} className={`${SIZE[size]} ${STYLE[style]}`} disabled={disabled} type={type}>
            {text}
        </button>
    );
}
