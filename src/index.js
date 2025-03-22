import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { App2, Paragraph, InputField } from './App'
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>

  // <React.Fragment>
  <>
    <App />
    <App2 />
    <Paragraph />
    <InputField />

    <div>hello</div>
    <div>how are you</div>
    <div>I'm fine</div>
    <div>WE are also fine</div>
  </>
  // </React.Fragment>
  // </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
