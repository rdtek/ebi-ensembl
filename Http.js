/*  Module: Http.js
    Notes: Helper module for sending HTTP requests.
    Dependencies: None
    Author: Robin Dunn
*/
var Http = {
    // Function to send http ajax requests.
    send: function(method, url, onSuccess){
        var req = new XMLHttpRequest();
        req.responseType = 'json';
        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(typeof onSuccess === 'function'){
                    onSuccess(this.response, this.status, this);
                }
            }
        };
        console.log(method, url);
        req.open(method, url, true);
        req.send();
        return req;
    }
}