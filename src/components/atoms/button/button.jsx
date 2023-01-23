import './button.css';
import {SIZE, STYLE} from '../../../constants/button';


export function ButtonComponent({ text,size,style }) {
    return (
        <button className={`${SIZE[size]} ${STYLE[style]}`} type="button" >
            {text}
        </button>
    );
}