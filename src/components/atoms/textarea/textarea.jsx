import { useState } from "react";
import './textarea.css';

export function TextAreaComponent() {
    const [err, setError] = useState(false);

    const errorControl = () => {
        const area = document.querySelector('textarea');
        if(area.value.length < 5){
            setError(true);
            area.classList.add('error');
        }
    };

    return (
        <div className='flex flex-col'>
            <label className='text-sm'>Label</label>
            <textarea className='p-[10px_16px] border-solid border-2 rounded-lg 
                border-dark-grey-disabled hover:border-primary-hover 
                focus:outline-none focus:border-primary-base 
                focus:shadow-hover focus:shadow-primary-base/30'></textarea>
                {err && <p className="text-xs text-error">Some error...</p>}
        </div>
    );
}
