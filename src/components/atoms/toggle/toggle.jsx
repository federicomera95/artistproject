import './toggle.css';


export default function ToggleComponent({id, checked, disabled}){

    if(!id) throw new Error('There parameter "id" is required');

    return (
        <div className='toggle-field-group'>
            <input id={id} type="checkbox" defaultChecked={checked} disabled={disabled}/>
            <span></span>
        </div>
    );
}