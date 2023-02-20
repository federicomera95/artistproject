import './radio.css';

const Radio = ({ id, text, checked, disabled }) => {
    if (!id) throw new Error('The parameter "id" is required');

    return (
        <div
            className='flex items-center gap-[0.5em] [&>input]:absolute [&>input]:appearance-none
            [&>input]:flex [&>input]:justify-center [&>input]:items-center focus:[&>input]:outline-none
            [&>label]:flex [&>label]:items-center [&>label]:gap-[0.5em]'
        >
            <input type='radio' id={id} defaultChecked={checked} disabled={disabled} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default Radio;
