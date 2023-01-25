import './checkbox.css';

export default function CheckboxComponent({ id, text, checked, disabled }) {
    if (!id) throw new Error('The parameter "id" is required');

    return (
        <div className='check-container'>
            <input type='checkbox' id={id} defaultChecked={checked} disabled={disabled} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
}
