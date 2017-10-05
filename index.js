'use strict';

const config = require('./config/Config');
const FetchPage = require('./scraper/FetchPage');
const MapHTMLToCheerio = require('./scraper/MapHTMLToCheerio');
const ExtractElementObject = require('./scraper/ExtractElementObject');
const slicer = require('./lib/stringToQuestionAlternatives');


   FetchPage(config.baseUrl + config.urlPaths[0])
    .then(function(pageData){
        let pageObject = MapHTMLToCheerio(pageData);

        let selectorForQuestion = '.entry-content strong'
        let extractedForQuestion = ExtractElementObject(pageObject, selectorForQuestion);

        let questionText = extractedForQuestion['0'].children[0].data;
        console.log('question: ' + questionText);

        let selectorForAnswers = '.entry-content p';
        let extractedForAnswers = ExtractElementObject(pageObject, selectorForAnswers);
        let answersText = extractedForAnswers.text();
        let alts = slicer(answersText);
        for (let i = 0; i < 4; i += 1){
            console.log(alts[i].answerAlternativeId + ": " + alts[i].answerAlternativeText);
        }

        let selectorForRightAnswer = '.hidden-div b'
        let extractedForRightAnswer = ExtractElementObject(pageObject, selectorForRightAnswer);
        let rightAnswerText = extractedForRightAnswer['0'].children[0].data;
        console.log('right answer: ' + rightAnswerText);
    });
 

