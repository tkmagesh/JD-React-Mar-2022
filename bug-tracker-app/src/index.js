import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Bugs from './bugs'
import Projects from './projects'
import store from './store';

import { Provider } from 'react-redux';
    
ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
          <Projects />
          <Bugs/>
        </Provider>
    </React.Fragment>
    , document.getElementById('root')
)


/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//ES6 Modules

/* 
import * as calculator from './calc';
//console.log(calculator)
console.log(calculator.add(100,200)) 
*/

/* 
import * as calculator from './calc'
//const add = calculator.add;
const { add } = calculator;
console.log(add(1000,2000)) 
*/

/* 
import { add } from './calc'
console.log(add(10000,2000)) 
*/

//importing the default export
/* import obj from './calc'
console.log(obj) */
