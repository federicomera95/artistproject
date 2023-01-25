import './radio.css';

export default function RadioComponent({ id, text, checked, disabled }) {
    if (!id) throw new Error('The parameter "id" is required');

    return (
        <div className='radio-container'>
            <input type='radio' id={id} defaultChecked={checked} disabled={disabled} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
}
