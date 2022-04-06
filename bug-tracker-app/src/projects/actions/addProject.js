let _currentProductId = 0;
export function addProject(projectName){
    const newProject = { id: ++_currentProductId, name: projectName }
    const action = { type: 'PROJECT_ADD', payload: newProject };
    return action
}