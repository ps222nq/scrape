'use strict';

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
        arr.push(answerAlternative(letters[i], stripLastCharAndSpaces(splitsArray[i])))
    }

    return arr;
}

module.exports = StringToQuestionAlternatives;