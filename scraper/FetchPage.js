'use strict';

module.exports = function(url) {

    const rp = require('request-promise');

    return rp(url)
    .then(function(htmlString) {
        console.log('fetching!');
        //console.log(htmlString);
        return htmlString;
      })
    .catch(function(err) {
        return err.message;
      });
    
}
