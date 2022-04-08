import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Bugs from './bugs'
import Projects from './projects'
import Home from './home';

import store from './store';

import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
          <div>
            <span>
              [ <Link to="/">Home</Link> ]
            </span>
            <span>
              [ <Link to="/projects">Projects</Link> ]
            </span>
            <span>
              [ <Link to="/bugs">Bugs</Link> ]
            </span>
          
        </div>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/bugs">
            <Bugs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </Provider>        
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
