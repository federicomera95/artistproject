import ReactDOM from 'react-dom/client';
import React from 'react';

import './global.css';
import RadioComponent from './components/atoms/radio/radio';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RadioComponent id='test' />
        Ricordatevi di cancellare quello che avete fatto qua dentro
    </React.StrictMode>
);
