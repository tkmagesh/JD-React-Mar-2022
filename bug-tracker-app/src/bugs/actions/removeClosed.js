import bugApi from '../services/bugApi';

export function removeClosed(){
    return function(dispatch, getState){
        const { bugs } = getState()
        const closedBugs = bugs.filter(bug => bug.isClosed);
        closedBugs.forEach(async closedBug => {
            await bugApi.remove(closedBug)
            const action = { type : 'BUG_REMOVE', payload : closedBug};
            dispatch(action);
        })
    }
}