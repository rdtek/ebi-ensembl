/*  Module: GeneTools.js
    Notes: Provides methods for handling gene data.
    Dependencies: None
    Author: Robin Dunn
*/
var GeneTools = {
    parseHgvsQuery: function(query){
        var parts = { symbol: '', type:'', positionChange:'' };
        if(typeof query !== 'string' || query == '') 
            throw new Error('HGVS query must not be null or empty.');
        var iDot = query.indexOf('.');
        var iColon = query.indexOf(':');
        if(iDot >= 1 && iColon >= 2){
            parts.symbol = query.substring(0, iDot);
            parts.type = query.substring(iDot+1, iColon);
            parts.positionChange = query.substring(iColon+1);
        } 
        return parts;
    },
    hasCharAt: function(sequence, index, character){
        var isFound = false;
        if(typeof sequence === 'string' && sequence.length >= index) {
            isFound = sequence[index] == character;               
        }
        return isFound;
    }
}