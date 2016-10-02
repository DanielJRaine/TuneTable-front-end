'use strict';
const app = require('../app.js');

const displayScore = (data) => {
  app.tune = data.tune;
  // ABCJS.renderAbc(output, tunebookString, parserParams, engraverParams, renderParams)
  // see https://github.com/paulrosen/abcjs/blob/master/api.md for documentation
  ABCJS.renderAbc('score-display-1', app.tune.ABCnotation, '', {staffwidth: 650});
  console.log(app.tune);
  
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  displayScore,
  failure,
};
