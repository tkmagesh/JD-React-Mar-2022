const BugItem = ({bug, toggle, remove}) => {
    return (
        <li key={bug.id}>
            <span 
                className={"bugname " + (bug.isClosed ? 'closed' : '')}
                onClick={() => toggle(bug)}
            >
                {bug.name}
            </span>
            <small> [ {bug.projectName} ] </small>
            <div className="datetime">[{bug.createdAt.toString()}]</div>
            <button onClick={() => remove(bug)}>Remove</button>
        </li>
    )
}

export default BugItem;