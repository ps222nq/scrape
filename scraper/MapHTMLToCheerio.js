'use strict';

module.exports = function(data) {
    const cheerio = require('cheerio');
    let $ = cheerio.load(data);
    return $;
}