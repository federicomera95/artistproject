import ReactDOM from 'react-dom/client';
import { TextAreaComponent } from './components/atoms/textarea/textarea';


import './global.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<>
<div className='p-[24px]'>
    <TextAreaComponent />
</div>
</>);
