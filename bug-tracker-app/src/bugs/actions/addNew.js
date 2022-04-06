//TO BE FIXED:
import bugApi from '../services/bugApi';

export function addNew(bugName, projectId){
    return async function(dispatch){
        const newBugData = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date(),
            projectId : 1
        };
        const newBug = await bugApi.save(newBugData);
        const action = { type : 'BUG_ADD', payload : newBug };
        dispatch(action);
    }
}