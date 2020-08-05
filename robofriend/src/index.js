import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Card from './Card';
import 'tachyons';

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
    <Card/>
    <Card/>
    <Card/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
