import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer';

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

const loggerMiddleware = store => next => action => {
    console.group(action.type);
    console.log('before - ', store.getState())
    console.log(action)
    next(action)
    console.log('after - ', store.getState())
    console.groupEnd()
}

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;