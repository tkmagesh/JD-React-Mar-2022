import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { bindActionCreators } from 'redux';
import * as bugActionCreators from './bugs/actions'
import * as projectActionCreators from './projects/actions'
import Bugs from './bugs'
import Projects from './projects'
import store from './store';

const bugActionDispatchers = bindActionCreators(bugActionCreators, store.dispatch);
const projectActionDispatchers = bindActionCreators(projectActionCreators, store.dispatch);
function renderApp(){
    const { bugs : bugList, projects : projectsList } = store.getState();
    ReactDOM.render(
        <React.Fragment>
            <Projects list={projectsList} {...projectActionDispatchers}/>
            <Bugs list={bugList} projects={projectsList} {...bugActionDispatchers}/>
        </React.Fragment>
        , document.getElementById('root')
    )
}
renderApp();
store.subscribe(renderApp);

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
