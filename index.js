'use strict';

const config = require('./config/Config');
const FetchPage = require('./scraper/FetchPage');
const MapHTMLToCheerio = require('./scraper/MapHTMLToCheerio');
const ExtractElementObject = require('./scraper/ExtractElementObject');

FetchPage(config.baseUrl)
    .then(function(pageData){
        let pageObject = MapHTMLToCheerio(pageData);
        let elementToGet = 'h1'
        let extracted = ExtractElementObject(pageObject, elementToGet);
        console.log(extracted.text());
    });
