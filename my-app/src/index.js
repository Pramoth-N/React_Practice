import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import List from './Session8/List';
// import Parent from './Props/Parent';
// import Counter from './Counter/Counter';
// import Task1 from './Session6/Task1';
// import Name from './State/Name';
// import CompA from './Session7/CompA';
// import RegForm from './Session7/RegForm/RegForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
