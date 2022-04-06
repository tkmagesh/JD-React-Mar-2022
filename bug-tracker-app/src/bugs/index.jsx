import {Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import BugEdit from './components/bugEdit';
import BugSort from './components/bugSort';
import BugStats from './components/bugStats';
import BugList from './components/bugList';

import * as bugActionCreators from './actions';
import bugSelector from './bug-selector';

/* interface with the redux  */
const Bugs = () => {
    //extracting the state from the store
    const {bugs, projects, closedCount} = useSelector(bugSelector)

    //creating action dispatchers
   /* 
    const dispatch = useDispatch();
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    const { addNew, toggle, remove, removeClosed } = bugActionDispatchers; 
    */

    const { addNew, toggle, remove, removeClosed } = bindActionCreators(bugActionCreators, useDispatch());; 
    return(
        <Fragment>
            <h3>Bugs</h3>
            <BugStats count={bugs.length} closedCount={closedCount}/>
            <BugSort/>
            <BugEdit addNew={addNew} projects={projects} />
            <BugList {...{bugs, toggle, remove, removeClosed}}/>
        </Fragment>
    )
}
export default Bugs;