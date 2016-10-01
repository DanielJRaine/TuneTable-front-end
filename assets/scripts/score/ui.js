'use strict';
const app = require('../app.js');

const displayScore = (data) => {
  app.tune = data.tune
  ABCJS.renderAbc('score-display-2', app.tune.ABCnotation);
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  displayScore,
  failure,
};
