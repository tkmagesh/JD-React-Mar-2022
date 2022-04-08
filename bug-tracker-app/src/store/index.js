import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    projects : projectsReducer,
    bugs : bugsReducer
});

/* function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.log('before - ', store.getState())
            console.log(action)
            next(action)
            console.log('after - ', store.getState())
            console.groupEnd()
        }
    }
} */

/* 
const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('before - ', store.getState())
    console.log(action)
    next(action)
    console.log('after - ', store.getState())
    console.groupEnd()
}

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function'){
        return action(store.dispatch)
    }
    return next(action);
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, asyncMiddleware)); 
*/
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;