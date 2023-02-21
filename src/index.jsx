import ReactDOM from 'react-dom/client';
import { PhotoProfile } from './components/atoms/PhotoCard';
import './global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <div className='p-5'>
            {/* <PhotoProfile artName="Giuseppe" photoTitle="Photocard Component"/> */}
        </div>
    </>
);
