'use strict';

const StringToRightAnswer = function(str) {

    const answerAlternative = require('../models/AnswerAlternative');

    let letter = str[0];
    let text = str.split('.');
    let trimmedText = text[1].trim();

    return answerAlternative(letter, trimmedText);
}

module.exports = StringToRightAnswer;