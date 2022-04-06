import { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as projectActionCreators from './actions';

const Projects = () => {
    
    const [newProjectName, setNewProjectName] = useState('');
    
    const projects = useSelector(storeState => storeState.projects)

    const dispatch = useDispatch()
    const projectActionDispatchers = bindActionCreators(projectActionCreators, dispatch);
    const { addProject } = projectActionDispatchers;

    return(
        <Fragment>
            <h3>Projects</h3>
            <hr />
            <label htmlFor="">Project Name :</label>
            <input type="text" onChange={ evt => setNewProjectName(evt.target.value)}/>
            <button onClick={() => addProject(newProjectName)}>Add Project</button>
            <ul>
                {projects.map(project => (<li key={project.id}>{project.name}</li>))}
            </ul>
        </Fragment>
    )
}
export default Projects