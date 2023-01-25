import './inputText.css';


export default function InputTextComponent({ id, type='text', label, icon = {}, required, disabled, msgError }) {
    if(!id) throw new Error('There parameter "id" is required');

    const {i, src} = icon;

    return (
        <div className='input-text-container'>
            <label htmlFor={id} disabled={disabled}>{label}</label>
            <div>
                {(!!icon === true && i === 'lf') && <i className={`${src} ${i}`}></i>}
                <input className={ msgError ? 'error' : ''} type={type} id={id} disabled={disabled} required={required} placeholder={`Inserire ${label}`}/>
                {(!!icon === true && i === 'rt') && <i className={`${src} ${i}`}></i>}
            </div>
                { !!msgError === true && <p>{msgError}</p> }
        </div>
    );
}