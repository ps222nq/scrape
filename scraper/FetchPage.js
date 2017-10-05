'use strict';

module.exports = function(url) {

    const rp = require('request-promise');

    return rp(url)
    .then(function(htmlString) {
        return htmlString;
      })
    .catch(function(err) {
        return err.message;
      });
    
}
