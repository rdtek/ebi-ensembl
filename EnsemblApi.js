/*  Module: EnsemblApi.js
    Notes: Provides methods to call the Ensembl REST API.
    Dependencies: Http.js
    Author: Robin Dunn
*/
var EnsemblApi = {
    // Function to fetch gene info for given gene symbol
    getGeneBySymbol: function(symbol, callback){
        var species = 'homo_sapiens';
        var url = 'http://rest.ensembl.org/lookup/symbol/'+species
                    +'/'+symbol+'.json?;expand=1';
        var onSuccess = function(resp, status, xhr){
            if(typeof callback === 'function'){
                callback(resp, status, xhr);
            }
        };
        return Http.send('get', url, onSuccess);
    },
    // Function to fetch sequences for given entity ID
    getSequence: function(id, allowMultiple, seqType, callback){
        var url = 'http://rest.ensembl.org/sequence/id/'+id+'.json?';
        if(allowMultiple == true) url += 'multiple_sequences=1&';
        if(typeof seqType === 'string') url += 'type='+seqType+'&';
        var onSuccess = function(resp, status, xhr){
            if(typeof callback === 'function'){
                callback(resp, status, xhr);
            }
        };
        return Http.send('get', url, onSuccess);
    }
}