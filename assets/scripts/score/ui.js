'use strict';
const app = require('../app.js');
// const template = require('lodash.template');
const _ = require('lodash');

let numberOfScoreViews = 0;
const displayScore = (data) => {
  app.tune = data.tune;
  numberOfScoreViews += 1;
  // ABCJS.renderAbc(output, tunebookString, parserParams, engraverParams, renderParams)
  // see https://github.com/paulrosen/abcjs/blob/master/api.md for documentation
  let musicBoxTemplate = _.template("<svg id='score-display-<%= numberOfScoreViews %>'>I am an SVG</svg>");
  let compiledMusicBoxTemplate = musicBoxTemplate({
    numberOfScoreViews: numberOfScoreViews,
  });
  $('.music-box').append(compiledMusicBoxTemplate);
  
  //
  // let scoreTemplate = _.template("<% ABCJS.renderAbc('score-display-numberOfScoreViews>, ABCnotation, '', {staffwidth: 650}); %>");
  // let compiledScoreTemplate = scoreTemplate({
  //     ABCnotation: data.tune.ABCnotation,
  //   });
  // $('.music-box').append(compiledScoreTemplate);
  
  // ABCJS.renderAbc('score-display-1', data.tune.ABCnotation, '', {staffwidth: 650});
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  displayScore,
  failure,
};
