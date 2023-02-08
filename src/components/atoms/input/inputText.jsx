import './inputText.css';

import { useState } from 'react';

export default function InputTextComponent({ objInputText, disabled, required, icon = {} }) {

    const {pos, src} = icon;
    const {id, type='text', label, placeholder, msgError='', val} = objInputText;
    const [value, setValue] = useState(val);

    const handleChange = (e) => setValue(e.target.value);

    if(!id) throw new Error('The parameter "id" is required');

    return (
        <div className='input-field-group'>
            <label htmlFor={id} disabled={disabled}>{label}</label>
            <div className='input-text-group'>
                {(!!icon && pos === 'left') && <img src={src} className={`${pos}`} />}
                <input 
                    title={placeholder} 
                    className={ `${msgError && !value ? 'error' : ''} ${value && 'filled'}`} 
                    type={type} id={id}
                    defaultValue={value} 
                    disabled={disabled} 
                    required={required} 
                    onChange={handleChange}/>
                {(!!icon && pos === 'right') && <img src={src} className={`${pos}`}/>}
                <label className={ `${value && 'filled'} ${!!icon && pos}`} disabled={disabled}>{placeholder}</label>
            </div>
            { (!!msgError && !value) && <p>{msgError}</p> }
        </div>
    );
}