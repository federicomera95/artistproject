import './inputText.css';

import { useState } from 'react';

export default function InputTextComponent({ objInputText, disabled, required, icon = {} }) {

    const {pos, src} = icon;
    const {id, type='text', label, msgError=''} = objInputText;
    const [value, setValue] = useState('');

    const handleChange = (e) => setValue(e.target.value);

    if(!id) throw new Error('There parameter "id" is required');

    return (
        <div className='input-field-group'>
            <label htmlFor={id} disabled={disabled}>{label}</label>
            <div className='input-text-group'>
                {(!!icon && pos === 'left') && <i className={`${src} ${pos}`}></i>}
                <input className={ `${msgError ? 'error' : ''} ${value && 'filled'}`} type={type} id={id} disabled={disabled} required={required} onChange={handleChange}/>
                {(!!icon && pos === 'right') && <i className={`${src} ${pos}`}></i>}
                <label className={ `${value && 'filled'} ${!!icon && pos}`} disabled={disabled}>{`Inserire ${label}`}</label>
            </div>
            { !!msgError && <p>{msgError}</p> }
        </div>
    );
}