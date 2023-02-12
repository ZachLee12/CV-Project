import React from 'react';
import ReactDOM from 'react-dom/client';
import Print from './Components/Print/Print.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Print />
);

if (module.hot) {
    module.hot.accept();
}

