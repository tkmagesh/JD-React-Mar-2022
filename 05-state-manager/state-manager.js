let StateManager = (function(){
    let _currentState = undefined,
        _subscribers = [],
        _reducer = undefined;

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
        _reducer = reducer
        let store = { getState, subscribe, dispatch }
        return store;
    }

    return { createStore };    
})();