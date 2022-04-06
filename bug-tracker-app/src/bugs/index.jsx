import { useState, Fragment } from 'react';

const Bugs = ({list, projects, addNew, toggle, remove, removeClosed}) => {

    const [newBugName, setNewBugName] = useState('')
    const [selectedProject, setSelectedProject] = useState(0);

    const bugItems = list.map((bug,idx) => (
        <li key={idx}>
            <span 
                className={"bugname " + (bug.isClosed ? 'closed' : '')}
                onClick={() => toggle(bug)}
            >
                {bug.name}
            </span>
            <small> [ {projects.find(project => project.id === bug.projectId).name} ] </small>
            <div className="datetime">[{bug.createdAt.toString()}]</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    ));
    
    const closedCount = list.reduce((result, bug) => bug.isClosed ? result + 1  : result, 0);

    return(
        <Fragment>
            <h3>Bugs</h3>
            <section className="stats">
                <span className="closed">{closedCount}</span>
                <span> / </span>
                <span>{list.length}</span>
            </section>
            <section className="sort">
                <label htmlFor="">Order By :</label>
                <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <label htmlFor="">Descending ?:</label>
                <input type="checkbox" name="" id=""/>
            </section>
            <section className="edit">
                <label htmlFor="">Bug Name :</label>
                <input type="text" onChange={ evt => setNewBugName(evt.target.value)}/>
                <label htmlFor="">Project : </label>
                <select onChange={evt => setSelectedProject(evt.target.value)}>
                    <option value="">--Select--</option>
                    {projects.map(project => (<option key={project.id} value={project.id}>{project.name}</option>))}
                </select>
                <button onClick={() => addNew(newBugName, selectedProject)}>Add New</button>
            </section>
            <section className="list">
                <ul>
                    {bugItems}
                </ul>
                <button onClick={() => removeClosed(list)}>Remove Closed</button>
            </section>
        </Fragment>
    )
}
export default Bugs;