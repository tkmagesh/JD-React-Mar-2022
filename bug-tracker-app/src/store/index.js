import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bugs/reducers/bugsReducer'
import projectsReducer from '../projects/reducers/projectsReducer';

const rootReducer = combineReducers({
    projects : projectsReducer,
    bugs : bugsReducer
});

const store = createStore(rootReducer);

export default store;