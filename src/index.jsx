import ReactDOM from 'react-dom/client';
import React from 'react';

import './global.css';

import { ButtonComponent } from './components/atoms/button/button';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ButtonComponent text='Button' size='large' style='primary' isDisabled={false} />
        <ButtonComponent text='Button' size='large' style='primary' isDisabled={true} />
    </React.StrictMode>
);
