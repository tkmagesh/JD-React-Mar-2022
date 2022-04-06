function bugsReducer(currentState = [], action){
    switch (action.type) {
        case 'BUG_ADD':
            return [...currentState, action.payload]
        case 'BUG_REPLACE':
            const bugToReplace = action.payload;
            return currentState.map(bug => bug.id === bugToReplace.id ? bugToReplace : bug);
        case 'BUG_REMOVE':
            const bugToRemove = action.payload;
            return currentState.filter(bug => bug.id !== bugToRemove.id);
        case 'BUG_INIT':
            return action.payload;
        default:
            break;
    }
    return currentState;
}

export default bugsReducer;