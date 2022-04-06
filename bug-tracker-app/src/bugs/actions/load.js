import axios from 'axios';
import bugApi from '../services/bugApi'
export function load(){
    /* return function(dispatch, getState){
        axios
            .get('http://localhost:3030/bugs')
            .then(function(response){
                return response.data;
            })
            .then(function(bugs){
                const action = { type : 'BUG_INIT', payload : bugs}
                dispatch(action);
            }); 
    } */
    return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type : 'BUG_INIT', payload : bugs}
        dispatch(action);
    }
}

