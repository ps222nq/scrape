'use strict';

// const cheerio = require('cheerio');
// const request = require('request');
const config = require('./config/Config');
const FetchPage = require('./scraper/FetchPage');

FetchPage(config.baseUrl)
    .then(function(res)
        {console.log(res)}
    );
