/*  Module: State.js
    Notes: Provides methods to manage application state.
    Dependencies: None
    Author: Robin Dunn
*/
var State = {
    state: {},
    subscriptions: [],
    onChangeCallback: function(){},
    onChange: function(state){
        if(typeof this.onChangeCallback === 'function'){
            this.onChangeCallback(state);
        }
    },
    // Function to update application state
    set: function(newState, callback){
        for (var propName in newState) {
            var newStateValue = newState[propName];
            this.state[propName] = newStateValue;
            this.notify(propName, newStateValue);
        }
        if(typeof callback === 'function') callback();
        this.onChange(this.state);
    },
    get: function(stateName){
        return this.state[stateName];
    },
    notify: function(stateName, newStateValue){
        // Notify subscribers of this state change
        //console.log('sub',this.subscriptions);
        if(typeof this.subscriptions !== 'undefined' 
            && this.subscriptions.constructor === Array){
            for(var i = 0; i < this.subscriptions.length; i++){
                let s = this.subscriptions[i];
                if(s.stateName == stateName){
                    if(typeof s.onNotify === 'function') 
                        s.onNotify(newStateValue);
                }
            }
        }
    },
    subscribe: function(stateName, onNotify){
        if(typeof onNotify === 'function'){
            // TODO: check if subscriber present already.
            this.subscriptions.push({ stateName: stateName, onNotify: onNotify });
        }
    }
}