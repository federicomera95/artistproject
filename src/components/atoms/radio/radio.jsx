import './radio.css';

export default function RadioComponent({ id }) {
    if (!id) throw new Error('The parameter "id" is required');

    return (
        <div className='radio-container'>
            <input id={id} type='radio' />
            <label htmlFor={id}>Radio test</label>
        </div>
    );
}
