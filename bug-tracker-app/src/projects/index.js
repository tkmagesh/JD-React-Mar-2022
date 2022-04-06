import { useState, Fragment } from 'react';

const Projects = ({list, addProject}) => {
    const [newProjectName, setNewProjectName] = useState('');
    return(
        <Fragment>
            <h3>Projects</h3>
            <hr />
            <label htmlFor="">Project Name :</label>
            <input type="text" onChange={ evt => setNewProjectName(evt.target.value)}/>
            <button onClick={() => addProject(newProjectName)}>Add Project</button>
            <ul>
                {list.map(project => (<li key={project.id}>{project.name}</li>))}
            </ul>
        </Fragment>
    )
}
export default Projects