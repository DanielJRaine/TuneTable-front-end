'use strict';
const app = require('../app.js');

const displayScore = (data) => {
  app.tune = data.tune;
  // ABCJS.renderAbc(output, tunebookString, parserParams, engraverParams, renderParams)
  // see https://github.com/paulrosen/abcjs/blob/master/api.md for documentation
  ABCJS.renderAbc('score-display-1', app.tune.ABCnotation, '', {staffwidth: 650});
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  displayScore,
  failure,
};
// create a template that calls a partial
// create a partial (something that happens multiple times).  
// require templates in ui
// <h1> my partial </h1>
//  {{#each scores}}
//    {{>scores_partial}}
//  {{/each}}

// {{}}
// have the partial create buttons for delete/whatever
// in your html, create a 'score' div that will contain your scores
