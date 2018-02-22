var Extensions = {
    $: function(id){
        return document.getElementById(id);
    },
    isLetter: function(str) {
        // Checks if char is on of the english alphabet letters.
        return str.length === 1 && str.match(/[a-z]/i);
    },
    isArray: function(arrayCandidate){
        return typeof arrayCandidate !== 'undefined'
            && arrayCandidate.constructor === Array;
    },
    find: function(array, propName, value){
        var result = null;
        for(var i = 0; i < array.length;i++){
            var item = array[i];
            if(typeof item === 'undefined' || item === null) continue;
            if(item[propName] === value){ result = item; break; }
        }
        return result;
    },
    filter: function(array, propName, value){
        var result = [];
        for(var i = 0; i < array.length;i++){
            var item = array[i];
            if(typeof item === 'undefined' || item === null) continue;
            if(item[propName] === value) result.push(item)
        }
        return result;
    }
}