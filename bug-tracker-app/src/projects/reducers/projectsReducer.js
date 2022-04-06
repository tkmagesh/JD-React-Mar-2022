function projectsReducer(currentState = [], action){
    if (action.type === 'PROJECT_ADD'){
        return [...currentState, action.payload];
    }
    return currentState
}
export default projectsReducer;