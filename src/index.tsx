import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GlobalStyle} from "./styles/Global.styled";

// const container = document.getElementById('root');
// const root = createRoot(container);
//
// root.render(
//     <React.StrictMode>
//         <GlobalStyle />
//         <App />
//     </React.StrictMode>
// );


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if(root) {
    root.render(
        <React.StrictMode>
            <GlobalStyle />
            <App />
        </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
