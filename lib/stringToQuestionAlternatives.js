'use strict';

//TODO: do smth about the naming inconsistency, this is an answer alternative not a question alternative
const StringToQuestionAlternatives = function(str) {

    const answerAlternative = require('../models/AnswerAlternative');

    let splitsArray = str.split('.');
    splitsArray.splice(0,1);

    let arr = [];

    let stripLastCharAndSpaces = function(str){
        let spliced = str.slice(0, -1);
        let trimmed = spliced.trim();
        return trimmed;
    }

    let letters = ['A', 'B', 'C', 'D'];
    
    
    for (let i = 0; i < 4; i += 1) {
        //TODO refactor so instead of checking which of the alternatives it is, check for occurence of "show answer" in the string
        if (i < 3){
            arr.push(answerAlternative(letters[i], stripLastCharAndSpaces(splitsArray[i])));   
        } else {
            let temp = stripLastCharAndSpaces(splitsArray[i]);
            let index = temp.indexOf('Show Answer');
            let ans = temp.substring(0, index);
            arr.push(answerAlternative(letters[i], ans));
        }
    }

    return arr;
}

module.exports = StringToQuestionAlternatives;