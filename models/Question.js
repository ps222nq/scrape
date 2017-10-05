'use strict';


const Question = function (q, a, rightA) {

    return {
        questionText: q,
        answerAlternatives: a,
        rightAnswer: rightA
    };

}

module.exports = Question;