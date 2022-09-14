import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './assets/css/fonts.css'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a, button {
  cursor: pointer;
}
`

root.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>
);