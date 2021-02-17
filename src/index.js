import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import reportWebVitals from './reportWebVitals';
import Menu from './icons/menu.json'


ReactDOM.render(
  <React.Fragment>
    <Header />
    <App menu={Menu}/>
  </React.Fragment>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
