const bugSelector =  storeState => {
    const { bugs, projects } = storeState;
    const closedCount = bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0);
    const bugsWithProject = bugs.map(bug => ({
        ...bug,
        projectName : projects.find(project => project.id === bug.projectId).name
    }))
    return { bugs : bugsWithProject , projects, closedCount }
};

export default bugSelector;