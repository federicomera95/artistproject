import { useState } from 'react';

import './input-file.css';


const InputFileComponent = ({id, label, error='', required, text })=> {
    if(!id) throw new Error('The id is required!');

    const [value,setValue] = useState(null);

    const handleChange = ()=> {};

    return (
        <div className='input-file-field-group'>
            <label htmlFor={id}>{label}</label>
            <div className='input-file-content'>
                <input id={id} type='file' onChange={handleChange} required={required}/>
                <img src='/assets/icons/upload.svg' />
            </div>
            <p>{text}</p>
        </div>
    );
};

export default InputFileComponent;