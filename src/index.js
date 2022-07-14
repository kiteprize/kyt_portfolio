import React from 'react';
import ReactDOM from 'react-dom/client';
import Epic01 from './Epic_01';
import Epic02 from './Epic_02';
import Epic03 from './Epic_03';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Epic01 />
    <Epic02 />
    <Epic03/>
  </React.StrictMode>
);
