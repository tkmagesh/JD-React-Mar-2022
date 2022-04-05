let StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        _init_action = { type : '@@INIT/ACTION' }

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    //private 
    function emitChange(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        let newState = _reducer(_currentState, action);
        if (newState === _currentState) return; //NO state changes
        _currentState = newState;
        emitChange()
    }

    function createStore(reducer){
        if (typeof reducer !== 'function')
            throw new Error("reducer is mandatory to create the store");
        _reducer = reducer;
        _currentState = _reducer(undefined, _init_action) // TO INITIALIZE THE CURRENT STATE with a VALID DEFAULT STATE
        let store = { getState, subscribe, dispatch }
        return store;
    }

    function bindActionCreators(actionCreators, dispatch){
        const actionDispatchers = {}
        for (let key in actionCreators){
            actionDispatchers[key] = function(...args){
                const action = actionCreators[key](...args)
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };    
})();