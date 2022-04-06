export function removeClosed(/* TO BE FIXEDS */ currentBugs){
    const bugsToRetain = currentBugs.filter(bug => !bug.isClosed);
    const action = { type : 'BUG_INIT', payload : bugsToRetain};
    return action;
}